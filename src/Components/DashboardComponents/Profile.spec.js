import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import jwt from 'jsonwebtoken';

// CONFIG
import { persistor } from '../../store/index';

// COMPONENTS

import Profile from './Profile';

let wrapper;
const history = createMemoryHistory();
let mockStore = configureStore([]);
let store;

describe('it renders for buyer', () => {
  beforeEach(() => {
    store = mockStore({
      loggedInUser: {
        type: 'buyer'
      },
      messages: {
        notifications: 0
      }
    });
    wrapper = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <Profile 
                  location={'search'}
              />
            </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);
  test('the component renders', () =>{
      expect(wrapper).toBeDefined()
  });
});