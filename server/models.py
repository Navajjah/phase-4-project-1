from sqlalchemy_serializer import SerializerMixin
from server.config import db

class Book(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    rarity = db.Column(db.String, nullable=False)
    spell_type = db.Column(db.String, nullable=False)
    author = db.Column(db.String(100), nullable=False)
    hogwarts_class = db.Column(db.String, nullable=False)
    reviews = db.relationship('Review', backref='book', cascade='all, delete-orphan')

    def __repr__(self):
        return f"Book('{self.title}', '{self.rarity}', '{self.spell_type}', '{self.author}','{self.hogwarts_class}')"
    
class Review(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Review('{self.content}', '{self.rating}')"

favorites = db.Table(
    'favorites',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('book_id', db.Integer, db.ForeignKey('book.id'), primary_key=True)
)

class User(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    favorites = db.relationship('Book', secondary=favorites, backref='liked_by')
    reviews = db.relationship('Review', backref='user', cascade='all, delete-orphan')

    def __repr__(self):
        return f"User('{self.username}')"