// DEPENDENCIES
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store/index';
import configureStore from 'redux-mock-store';

// COMPONENTS
import Login from './Login';

// ACTION CREATORS
import {} from '../store/Actions/actionCreators';

let mockStore = configureStore([]);
let store;

describe('Login component', () => {
  test('renders email and password field', () => {
    expect(wrapper.getByTestId('emailField')).toBeInTheDocument();
    expect(wrapper.getByTestId('passwordField')).toBeInTheDocument();
  });
});
describe('when isLoading is true', () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      isLoading: true
    });
    wrapper = rtl.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Login />
          </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(rtl.cleanup);
  test('renders spinner', () => {
    expect(wrapper.queryByTestId('spinner')).toBeInTheDocument();
  });
  test('does not render reset password', () => {
    expect(wrapper.queryByTestId('resetpassword')).toBeNull();
  });
});
