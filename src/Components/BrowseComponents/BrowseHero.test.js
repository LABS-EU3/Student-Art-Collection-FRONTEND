// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getByTestId, cleanup, render } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import BrowseHero from './BrowseHero';

let wrapper;

beforeEach(() => {
  wrapper = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <BrowseHero />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(cleanup);

describe('renders component as expected', () => {
  test('renders correct title', () => {
    expect(wrapper.queryByTestId('hero')).toBeInTheDocument();
  });
  test('renders background image', () => {
    expect(wrapper.getByTestId('hero')).toHaveStyle(
      'background: url(https://res.cloudinary.com/dwz7ogm5l/image/upload/v1580979444/student-art/browsehero_ss6ybi.jpg)'
    );
  });
});
