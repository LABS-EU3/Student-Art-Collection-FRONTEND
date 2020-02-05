import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';

// CONFIG
import { persistor } from '../../store/index';

// COMPONENTS

import SchoolSelling from './SchoolSelling';

let wrapper;
const history = createMemoryHistory();
let mockStore = configureStore([]);
let store;

describe('it renders for buyer', () => {
  beforeEach(() => {
    store = mockStore({
      loggedInUser: {
        type: 'buyer',
        _id: 1
      },
      messages: {
        notifications: 0
      }
    });
    wrapper = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <SchoolSelling />
            </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);

  test('component schould mount', () =>{
      expect(wrapper).toBeDefined()
  })
})