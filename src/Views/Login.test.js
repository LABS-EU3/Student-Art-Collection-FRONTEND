import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { MemoryRouter as Router } from 'react-router-dom';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Router>
      <Login />
    </Router>
  );
});
afterEach(rtl.cleanup);

describe('Login component', () => {
  test('renders submit button', () => {
    expect(wrapper.queryByText(/login/i)).toBeInTheDocument();
  });
  test('renders line of text to reset password', () => {
    expect(
      wrapper.queryByText(/if you forgot your password/i)
    ).toBeInTheDocument();
  });
  test('renders link in the password reset text', () => {
    expect(wrapper.getByText('here').closest('a')).toHaveAttribute('href', '/auth/resetPassword')
  })
  test('renders username and password field', () => {
    expect(wrapper.getByTestId('emailField')).toBeInTheDocument();
    expect(wrapper.getByTestId('passwordField')).toBeInTheDocument();
  });
});
