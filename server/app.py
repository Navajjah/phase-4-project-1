from flask import Flask
# from flask_restful import Resource
from config import app, db, api
from resources.books import BookList, BookDetail
from resources.review import ReviewList, ReviewDetail
from resources.user import UserList, UserDetail



@app.route('/')
def home():
    return "<h1>Library API</h1>"

api.add_resource(BookList, '/books')
api.add_resource(BookDetail, '/books/<int:book_id>')

api.add_resource(ReviewList, '/reviews')
api.add_resource(ReviewDetail, '/reviews/<int:review_id>')

api.add_resource(UserList, '/users')
api.add_resource(UserDetail, '/users/<int:user_id>')



if __name__ == "__main__":
    app.run(port=5555, debug=True)
