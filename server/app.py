from flask import Flask
from flask_restful import Resource
from server.config import app, db, api
from resources.books import BookList, BookDetail
from resources.review import ReviewList
from resources.users import UserList, UserDetail



@app.route('/')
def home():
    return "<h1>Library API</h1>"

api.add_resource(BookList, '/books')
api.add_resource(BookDetail, '/books/<int:book_id>')

api.add_resource(ReviewList, '/reviews')

if __name__ == "__main__":
    app.run(port=5555, debug=True)
