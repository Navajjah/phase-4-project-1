from flask_restful import Resource
from flask import request, jsonify
from server.config import db
from models import Review

class ReviewList(Resource):
    def post(self):
        data = request.get_json()
        new_review = Review(
            content=data['content']
            rating=data['rating']
            book_id=data['book_id']
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify(new_review.to_dict())
    
    def put(self,review_id):
        data = request.get_json()
        review = Review.query.get(review_id)
        if not review:
            return {'message': 'Review not found'}, 404
        if 'content' in data:
            review.content = data['content']
        if 'rating' in data:
            review.rating = data['rating']
        if 'book_id' in data:
            review.book_id = data['book_id']
        db.session.commit()
        return jsonify(review.to_dict()), 200
    
    def delete(self,review_id):
        review = Review.query.get(review_id)
        if not review:
            return {'message': 'Review not found'}, 404
        db.session.delete(review)
        db.session.commit()