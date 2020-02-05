// DEPENDENCIES
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

import DashNav from './DashNav';

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
              <DashNav />
            </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);
  test('it render', () => {
    expect(wrapper.queryByTestId('dashboardNavBar')).toBeInTheDocument();
  });
  test('does not render dashboard option for schools', () => {
    expect(wrapper.queryByTestId('schoolDashboard')).not.toBeInTheDocument();
  });
});
describe('it renders for school', () => {
  beforeEach(() => {
    store = mockStore({
      loggedInUser: {
        type: 'school'
      },
      messages: {
        notifications: 0
      }
    });
    wrapper = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Router history={history}>
              <DashNav />
            </Router>
          </Provider>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);
  test('renders dashboard for school profile', () => {
    expect(wrapper.queryByTestId('schoolDashboard')).toBeInTheDocument();
  });
});
