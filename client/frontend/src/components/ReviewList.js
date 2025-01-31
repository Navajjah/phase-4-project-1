import React, { useEffect, useState } from "react"
import "./ReviewList.css"

function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(null);
    const [updatedContent, setUpdatedContent] = useState("");
    const [updatedRating, setUpdatedRating] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/reviews")
            .then(resp => resp.json())
            .then(data => setReviews(data));
    }, []);

    const handleDelete = (reviewId, userId) => {
        fetch(`http://127.0.0.1:5000/reviews/${reviewId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userId }) 
        })
        .then(resp => resp.json())
        .then(() => setReviews(reviews.filter(review => review.id !== reviewId)));
    };

    const handleEdit = (review) => {
        setEditingReview(review.id);
        setUpdatedContent(review.content);
        setUpdatedRating(review.rating);
    };

    const handleUpdate = (reviewId, userId) => {
        fetch(`http://127.0.0.1:5000/reviews/${reviewId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: updatedContent,
                rating: updatedRating,
                user_id: userId  
            })
        })
        .then(resp => {
            if (!resp.ok) {
                return resp.json().then(err => { throw new Error(err.message) });
            }
            return resp.json();
        })
        .then(updatedReview => {
            setReviews(reviews.map(review => 
                review.id === reviewId ? updatedReview : review
            ));
            setEditingReview(null);
        })
        .catch(error => alert("Error updating review: " + error.message));
    };
    

    return (
        <div>
            <h1>Reviews</h1>
            <ul className="review-list">
                {reviews.map(review => (
                    <li key={review.id}>
                        {editingReview === review.id ? (
                            <div>
                                <textarea value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} />
                                <input type="number" value={updatedRating} min="1" max="5" onChange={(e) => setUpdatedRating(e.target.value)} />
                                <button onClick={() => handleUpdate(review.id, review.user_id)}>Save</button>
                                <button onClick={() => setEditingReview(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <p>{review.content} - Rating: {review.rating}</p>
                                <button onClick={() => handleEdit(review)}>Edit</button>
                                <button onClick={() => handleDelete(review.id, review.user_id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReviewList;
