import React, { useEffect, useState } from "react"

function ReviewList() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/reviews')
        .then(resp => resp.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1>Reviews</h1>
            <ul className="review-list">
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.content} - Rating:{review.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReviewList