// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, queryByTestId } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../store/index';

// COMPONENTS

import RegisterForm from './RegisterForm';

let wrapper;

const browseArtState = {
  image: 'testname',
  alt: 'test alt',
  title: 'test title',
  artistName: 'test artist name',
  dimensions: '30 x 30',
  price: 99
};

beforeEach(() => {
  wrapper = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <RegisterForm />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(cleanup);

describe('renders form', () => {
  test('render input field', () => {
    expect(
      wrapper.getByPlaceholderText(/Enter your first name/i)
    ).toBeInTheDocument();
    expect(
      wrapper.getByPlaceholderText(/Enter your last name/i)
    ).toBeInTheDocument();
    expect(
      wrapper.getByPlaceholderText(/Enter your email/i)
    ).toBeInTheDocument();
    expect(
      wrapper.getByPlaceholderText(/Enter your password/i)
    ).toBeInTheDocument();
    expect(
      wrapper.getByPlaceholderText(/write an address here/i)
    ).toBeInTheDocument();
  });
  test('renders submit button', () => {
    expect(wrapper.queryByTestId('submitButton')).toBeInTheDocument();
  });
  describe('onchange values get stored', () => {
    test('when typing value gets store', () => {
      const input = wrapper.getByPlaceholderText(/Enter your first name/i);
      rtl.fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toBe('test');
    });
    test('when adding and removing values, input value changes', () => {
      const input = wrapper.getByPlaceholderText(/Enter your first name/i);
      rtl.fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toBe('test');
      rtl.fireEvent.change(input, { target: { value: '' } });
      expect(input.value).toBe('');
    });
  });
});
