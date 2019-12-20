import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as rtl from '@testing-library/react'
import Register from './Register'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import store from '../store/index';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <Router>
        <Register />
      </Router>
    </Provider>
  );
});
afterEach(rtl.cleanup);

test('renders correct title', () => {
    expect(wrapper.queryByText(/register/i)).toBeInTheDocument();
})

test('renders the form', () => {
  
  expect(wrapper.queryByText(/school name/i)).toBeInTheDocument()
  expect(wrapper.queryByText(/description/i)).toBeInTheDocument()
  expect(wrapper.queryByText(/First Name/i)).toBeInTheDocument()
  expect(wrapper.queryByText(/Last Name/i)).toBeInTheDocument()
  expect(wrapper.queryByText(/e-mail/i)).toBeInTheDocument()
  expect(wrapper.queryByText(/password/i)).toBeInTheDocument()
})

test('checks the button changes buyer form to school form', () => {
  expect(wrapper.queryByText(/buyer/i)).toHaveClass('greenButton')
  rtl.fireEvent.click(wrapper.queryByText(/buyer/i))
  expect(wrapper.queryByText(/buyer/i)).toHaveClass('greyButton')
})
