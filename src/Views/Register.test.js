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
  expect(wrapper.queryByText(/register as a buyer/i)).toBeInTheDocument();
});

test('renders the form', () => {
  wrapper.debug()
  expect(wrapper.getByPlaceholderText(/enter your first name/i)).toBeInTheDocument();
  expect(wrapper.getByPlaceholderText(/enter your last name/i)).toBeInTheDocument();
  expect(wrapper.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
  expect(wrapper.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
});

// test('checks the button changes buyer form to school form', () => {
//   // expect(wrapper.queryAllByText(/buyer/i)[0]).toHaveClass('greenButton');
//   rtl.fireEvent.click(document.getElementsByClassName(/changeType/i)[0]);
//   // expect(wrapper.queryAllByText(/buyer/i)[0]).toHaveClass('greyButton');
//   expect(wrapper.queryByPlaceholderText(/enter your school name/i)).toBeInTheDocument();
//   expect(wrapper.queryByPlaceholderText(/this is optional/i)).toBeInTheDocumen;
//   expect(wrapper.queryByPlaceholderText(/enter your first name/i)).not.toBeInTheDocument();
//   expect(wrapper.queryByPlaceholderText(/enter your last name/i)).not.toBeInTheDocument();
// });
