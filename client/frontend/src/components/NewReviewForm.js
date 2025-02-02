import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './NewReviewForm.css';

// Define the submitReview function
async function submitReview(review) {
    try {
        const response = await fetch('http://127.0.0.1:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error submitting review:', errorData.message);
        } else {
            const data = await response.json();
            console.log('Review submitted successfully:', data);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}

const NewReviewForm = ({ reviewToEdit, onReviewSubmit }) => {
    const validationSchema = Yup.object({
        content: Yup.string().required('Content is required'),
        rating: Yup.number().required('Rating is required').min(1).max(5),
        book_id: Yup.number().required('Book ID is required'),
        user_id: Yup.number().required('User ID is required'),
    });

    return (
        <Formik
            initialValues={{
                content: reviewToEdit ? reviewToEdit.content : '',
                rating: reviewToEdit ? reviewToEdit.rating : 1, // Default to 1
                book_id: reviewToEdit ? reviewToEdit.book_id : 0, // Default to 0
                user_id: reviewToEdit ? reviewToEdit.user_id : 0, // Default to 0
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
                try {
                    console.log('Submitting review:', values); // Debugging: log the submitted values
                    await submitReview(values);
                    setStatus({ success: true });
                    resetForm(); // Reset the form after successful submission
                } catch (error) {
                    console.error('Error submitting review:', error); // Debugging: log the error
                    setStatus({ success: false, message: 'Submission failed' });
                } finally {
                    setSubmitting(false)
                }
            }}
        >
            {({ isSubmitting, status }) => (
                <div className='review-form'>
                    <h2>{reviewToEdit ? "Edit Review" : "Add a Review"}</h2>
                    {status && status.message && <p>{status.message}</p>}
                    <Form>
                        <div>
                            <label htmlFor="content">Content</label>
                            <Field id="content" name="content" as="textarea" />
                            <ErrorMessage name="content" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating</label>
                            <Field id="rating" name="rating" type="number" />
                            <ErrorMessage name="rating" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="book_id">Book ID</label>
                            <Field id="book_id" name="book_id" type="number" />
                            <ErrorMessage name="book_id" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="user_id">User ID</label>
                            <Field id="user_id" name="user_id" type="number" />
                            <ErrorMessage name="user_id" component="div" className="error-message" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>{reviewToEdit ? "Update Review" : "Add Review"}</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default NewReviewForm