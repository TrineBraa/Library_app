from config import db


class Book(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = False, nullable = False)
    author = db.Column(db.String (80), unique = False, nullable = False)
    published = db.Column(db.Integer, unique = False, nullable = False)
    # image = db.Column(db.Image, unique = False, nullable = False)

    def to_json(self):
        return{
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "published": self.published,
            # "image": self.image,
        }