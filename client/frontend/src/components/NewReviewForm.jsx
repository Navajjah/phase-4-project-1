import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const NewReviewForm = () => {
  const validationSchema = Yup.object({
    content: Yup.string().required('Content is required'),
    rating: Yup.number().required('Rating is required').min(1).max(5),
    book_id: Yup.number().required('Book ID is required'),
    user_id: Yup.number().required('User ID is required'),
  })

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then(resp => resp.json())
      .then(data => {
        console.log('Review added:', data);
        setSubmitting(false);
        resetForm();
      })
  }

  return (
    <Formik
      initialValues={{ content: '', rating: '', book_id: '', user_id: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
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
          <button type="submit" disabled={isSubmitting}>Add Review</button>
        </Form>
      )}
    </Formik>
  )
}

export default NewReviewForm