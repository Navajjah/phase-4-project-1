import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './NewUserForm.css'

const NewUserForm = ({ onUserSubmit }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
  })

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      await fetch('http://127.0.0.1:5000/users', {
    fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
      .then(data => {
        console.log('User added:', data)
        setStatus({ success: true });
      setSubmitting(false);
        resetForm()
      } catch (error) {
      setStatus({ success: false, message: 'Submission failed. Please try again.' });
    }
  }

  return (  
  <Formik
    initialValues={{ username: '' }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
      {({ isSubmitting }) => (
        <div className='user-form'>
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" />
              <ErrorMessage name="username" />
            </div>
            <button type="submit" disabled={isSubmitting}>Add User</button>
          </Form>
          </div>
        )}
      </Formik>
    
  )
}

export default NewUserForm
