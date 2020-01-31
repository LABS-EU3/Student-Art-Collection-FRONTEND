// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// CONFIG
import { persistor, store } from '../store/index';

// COMPONENTS
import Contact from './Contact';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <Contact />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(rtl.cleanup);

describe('form renders', () => {
  test('form renders', () => {
    expect(wrapper.queryByTestId('contactForm')).toBeInTheDocument();
  });
});
