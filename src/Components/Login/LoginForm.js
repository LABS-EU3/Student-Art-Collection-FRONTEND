import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
  return (
    <div>
      <Form>
        <Field
          name="email"
          type="email"
          placeholder="email"
          data-testid="emailField"
        />
        <ErrorMessage name="email" component="div" />
        <Field
          name="password"
          type="password"
          placeholder="password"
          data-testid="passwordField"
        />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default LoginForm;
