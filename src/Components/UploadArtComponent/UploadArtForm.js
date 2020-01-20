import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

function UploadArtForm() {
  return (
    <div>
      <Form>
        <Field name="name" type="text" placeholder="name" />
        {/* <Field name="artistName" type="text" placeholder="artistName" /> */}
        <Field name="medium" type="text" placeholder="medium" />
        <Field name="subject" type="text" placeholder="subject" />
        <Field name="height" type="text" placeholder="height" />
        <Field name="width" type="text" placeholder="width" />
        <Field name="style" type="text" placeholder="style" />
        <Field name="category" type="text" placeholder="category" />
        <Field name="materials" type="text" placeholder="materials" />
        <Field name="quantity" type="text" placeholder="quantity" />
        <Field name="price" type="text" placeholder="price" />
        <Field name="description" type="text" placeholder="description" />
        <button type="submit">Upload Art</button>
      </Form>
    </div>
  );
}

export default UploadArtForm;
