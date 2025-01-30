import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewBookForm = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    rarity: Yup.string().required('Rarity is required'),
    spell_type: Yup.string().required('Spell Type is required'),
    author: Yup.string().required('Author is required'),
    hogwarts_class: Yup.string().required('Hogwarts Class is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch('/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then(response => response.json())
      .then(data => {
        console.log('Book added:', data);
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <Formik
      initialValues={{ title: '', rarity: '', spell_type: '', author: '', hogwarts_class: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" />
            <ErrorMessage name="title" />
          </div>
          <div>
            <label htmlFor="rarity">Rarity</label>
            <Field id="rarity" name="rarity" />
            <ErrorMessage name="rarity" />
          </div>
          <div>
            <label htmlFor="spell_type">Spell Type</label>
            <Field id="spell_type" name="spell_type" />
            <ErrorMessage name="spell_type" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field id="author" name="author" />
            <ErrorMessage name="author" />
          </div>
          <div>
            <label htmlFor="hogwarts_class">Hogwarts Class</label>
            <Field id="hogwarts_class" name="hogwarts_class" />
            <ErrorMessage name="hogwarts_class" />
          </div>
          <button type="submit" disabled={isSubmitting}>Add Book</button>
        </Form>
      )}
    </Formik>
  );
};

export default NewBookForm;