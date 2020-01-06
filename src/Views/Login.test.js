import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/index';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Login />
        </Router>
      </PersistGate>
    </Provider>
  );
});
afterEach(rtl.cleanup);

describe('Login component', () => {
  test('renders submit button', () => {
    expect(wrapper.queryAllByText(/login/i)[0]).toBeInTheDocument();
  });
  test('renders line of text to reset password', () => {
    expect(
      wrapper.queryByText(/if you forgot your password/i)
    ).toBeInTheDocument();
  });
  test('renders link in the password reset text', () => {
    expect(wrapper.getByText('here').closest('a')).toHaveAttribute(
      'href',
      '/auth/resetPassword'
    );
  });
  test('renders email and password field', () => {
    expect(wrapper.getByTestId('emailField')).toBeInTheDocument();
    expect(wrapper.getByTestId('passwordField')).toBeInTheDocument();
  });
});
