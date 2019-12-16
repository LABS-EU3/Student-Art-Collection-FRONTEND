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
  test('renders form with username, password and submit button', () => {
    expect(wrapper.queryByText(/login/i)).toBeInTheDocument();
  });
});
