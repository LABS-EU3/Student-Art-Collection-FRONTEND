// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import Filter from './Filter';
import { getByTestId } from '@testing-library/react';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <Filter />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(rtl.cleanup);
