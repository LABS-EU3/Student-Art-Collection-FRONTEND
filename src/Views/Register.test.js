import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as rtl from '@testing-library/react';
import Register from './Register';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/index';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(rtl.cleanup);

test('renders correct title', () => {
  expect(wrapper.queryByText(/register/i)).toBeInTheDocument();
});

test('renders the form', () => {
  expect(wrapper.queryByText(/school name/i)).toBeInTheDocument();
  expect(wrapper.queryByText(/description/i)).toBeInTheDocument();
  expect(wrapper.queryByText(/First Name/i)).toBeInTheDocument();
  expect(wrapper.queryByText(/Last Name/i)).toBeInTheDocument();
  expect(wrapper.queryByText(/e-mail/i)).toBeInTheDocument();
  expect(wrapper.queryByText(/password/i)).toBeInTheDocument();
});

test('checks the button changes buyer form to school form', () => {
  expect(wrapper.queryAllByText(/buyer/i)[0]).toHaveClass('greenButton');
  rtl.fireEvent.click(wrapper.queryAllByText(/buyer/i)[0]);
  expect(wrapper.queryAllByText(/buyer/i)[0]).toHaveClass('greyButton');
});
