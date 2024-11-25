from flask import request, jsonify
import requests
from config import app, db
from model import Book
import os
from dotenv import load_dotenv




@app.route("/books/<string:book_id>", methods=["GET"])
def get_books(book_id):
    load_dotenv()
    API_KEY = os.getenv("GOOGLEBOOKS_API_KEY")
    Books_URL= f"https://www.googleapis.com/books/v1/volumes?q={book_id}&key={API_KEY}"
    try:
        response = requests.get(Books_URL)
        return jsonify(response.json())
    except request.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

@app.route("/Library", methods=["GET"])
def get_library():
    my_books = Book.query.all()
    json_book= list(map(lambda x: x.to_json(), my_books))
    return jsonify({"books": json_book})


@app.route("/add_book", methods=["POST"])
def add_new_book():
    title = request.json.get("title")
    author = request.json.get("author")
    published = request.json.get("published")

    if not title or not author or not published:
        return (jsonify({"message": "You must include a title, author and publishing year"}),
        400,
        )
    
    new_book = Book(title = title, author = author, published = published)
    try:
        db.session.add(new_book)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    return jsonify ({"message": "Book added to your library!"}), 200

@app.route("/delete_book/<int:book_id>", methods =["DELETE"])
def delete_book(book_id):
    book = Book.query.get(book_id)
    
    if not book:
        return jsonify ({"message":"Book not found"}), 404
    
    db.session.delete(book)
    db.session.comit()

    return jsonify({"message":"Book removed from library"}), 200


if __name__ =="__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)