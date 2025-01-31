// src/components/ReviewList.js
import React, { useEffect, useState } from 'react'
import ReviewDetail from './ReviewDetail'

function ReviewList() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/reviews')
      .then(resp => resp.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error:', error))
  }, [])

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id))
  }

  const handleUpdate = (updatedReview) => {
    setReviews(reviews.map(review => review.id === updatedReview.id ? updatedReview : review))
  }

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewDetail
              review={review}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewList