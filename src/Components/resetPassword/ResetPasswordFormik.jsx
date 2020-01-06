import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const ResetPasswordFormik = () => {
  return (
    <div>
      <Form>
        <Field name="email" type="email" placeholder="write your email" />
        <ErrorMessage name="email" component="div" />
        <button>Reset Password</button>
      </Form>
    </div>
  );
};

export default ResetPasswordFormik;
