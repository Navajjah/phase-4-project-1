import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const NewUserForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
  })

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then(resp => resp.json())
      .then(data => {
        console.log('User added:', data)
        setSubmitting(false)
        resetForm()
      })
  }

  return (
    <Formik
      initialValues={{ username: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" />
            <ErrorMessage name="username" />
          </div>
          <button type="submit" disabled={isSubmitting}>Add User</button>
        </Form>
      )}
    </Formik>
  )
}

export default NewUserForm