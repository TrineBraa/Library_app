from config import db
from flask_bcrypt import Bcrypt
from uuid import uuid

bcrypt = Bcrypt()


class Book(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = False, nullable = False)
    author = db.Column(db.String (80), unique = False, nullable = False)
    published = db.Column(db.Integer, unique = False, nullable = False)
    image = db.Column(db.String(255), unique = False, nullable = False)
    description = db.Column(db.Text, unique = False, nullable = True)

    users = db.relationship('UserLibrary', back_populates='book')

    def to_json(self):
        return{
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "published": self.published,
            "image": self.image,
            "description": self.description,
        }


class User(db.Model):
    __tablename__='users'

    id = db.Column(db.Integer, unique = True, nullable = False, primary_key = True, autoincrement = True)
    username = db.Column (db.String(120), unique = False, nullable = False)
    password = db.Column (db.String(30), nullable = False)

    books = db.relationship('UserLibrary', back_populates='user')

    def set_password(self, raw_password):
        self.password = bcrypt.generate_password_hash(raw_password).decode('utf-8')

    def check_password(self, raw_password):
        return bcrypt.check_password_hash(self.password, raw_password)


class UserLibrary(db.Model):
    __tablename__= 'userlibrary'

    id=db.Column(db.Integer, primary_key = True, autoincrement = True)
    userid= db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    bookid= db.Column (db.Integer, db.ForeignKey('book.id'), nullable = False)

    user = db.relationship('User', back_populates ='books')
    book = db.relationship('Book', back_populates = 'users')

    def to_json(self):
        return{
        "userid": self.userid,
        "bookid": self.bookid,
        }