// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, queryByTestId } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import BrowseCard from './BrowseCard';
import { toggleViewModal } from '../../store/Actions/actionCreators';

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
            <Dashboard />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(cleanup);

describe('it renders', () => {
    test('it render', () => {
        wrapper.debug()
    })
})
