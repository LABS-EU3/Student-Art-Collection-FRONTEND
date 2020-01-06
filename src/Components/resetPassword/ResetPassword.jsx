import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const ResetPassword = () => {
  return (
    <div>
      <Form>
        <Field
          name="password"
          type="password"
          placeholder="Type your new password"
        />
        <ErrorMessage name="password" component="div" />
        <button>Reset Password</button>
      </Form>
    </div>
  );
};

export default ResetPassword;
