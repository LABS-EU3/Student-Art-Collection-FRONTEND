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

import ResetPassword from './PasswordReset';

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
      },
      loadingStarted: false,
      loadingFinished: true
    });
    wrapper = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <ResetPassword location={{search:''}} />
            </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);

  test('component renders', () =>{
      expect(wrapper).toBeDefined()
  })
});