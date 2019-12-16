import React from 'react';
import { Form, Field } from 'formik';

const LoginForm = () => {
  return (
    <div>
      <Form>
        <Field name="username" type="text" placeholder="username" />
        <Field name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default LoginForm;
