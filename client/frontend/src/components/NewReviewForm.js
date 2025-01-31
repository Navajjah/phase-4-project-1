import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './NewReviewForm.css';

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
                rating: reviewToEdit ? reviewToEdit.rating : '',
                book_id: reviewToEdit ? reviewToEdit.book_id : '',
                user_id: reviewToEdit ? reviewToEdit.user_id : '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
                try {
                    await onReviewSubmit(values);
                    setStatus({ success: true });
                } catch (error) {
                    setStatus({ success: false, message: 'Submission failed' });
                } finally {
                    setSubmitting(false);
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
                            <Field id="content" name="content" />
                            <ErrorMessage name="content" />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating</label>
                            <Field id="rating" name="rating" type="number" />
                            <ErrorMessage name="rating" />
                        </div>
                        <div>
                            <label htmlFor="book_id">Book ID</label>
                            <Field id="book_id" name="book_id" type="number" />
                            <ErrorMessage name="book_id" />
                        </div>
                        <div>
                            <label htmlFor="user_id">User ID</label>
                            <Field id="user_id" name="user_id" type="number" />
                            <ErrorMessage name="user_id" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>{reviewToEdit ? "Update Review" : "Add Review"}</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default NewReviewForm;
