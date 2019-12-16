import React from 'react';
import { Form, Field } from 'formik';

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
        <Field
          name="password"
          type="password"
          placeholder="password"
          data-testid="passwordField"
        />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default LoginForm;
