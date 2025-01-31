from flask_restful import Resource
from flask import request, jsonify
from config import db
from models import Review

class ReviewList(Resource):
    def get(self):
        reviews = Review.query.all()
        return jsonify([review.to_dict() for review in reviews])
    
    def post(self):
        data = request.get_json()

        if not all (key in data for key in ['content','rating', 'book_id', 'user_id']):
            return {'message': 'Missing required fields'}, 400
        new_review = Review(
            content=data['content'],
            rating=data['rating'],
            book_id=data['book_id'],
            user_id=data['user_id']
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify(new_review.to_dict())

class ReviewDetail(Resource):
    def put(self,review_id):
        data = request.get_json()
        review = Review.query.get(review_id)
        if not review:
            return {'message': 'Review not found'}, 404
        
        if 'user_id' not in data or data['user_id'] != review.user_id:
            return {'message': 'Unauthorized edit of this review'}, 403

        if 'content' in data:
            review.content = data['content']
        if 'rating' in data:
            review.rating = data['rating']
        if 'book_id' in data:
            review.book_id = data['book_id']
        db.session.commit()
        return jsonify(review.to_dict()), 200
    
    def delete(self,review_id):
        data = request.get_json()
        review = Review.query.get(review_id)
        if not review:
            return {'message': 'Review not found'}, 404
        if 'user_id' not in data or data['user_id'] != review.user_id:
            return {'message': 'Unauthorized deletion of this review'}, 403
        db.session.delete(review)
        db.session.commit()