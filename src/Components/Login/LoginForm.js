import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
  return (
    <div>
      <Form>
        <Field
          name="username"
          type="text"
          placeholder="username"
          data-testid="usernameField"
        />
        <ErrorMessage name="username" component="div" />
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
