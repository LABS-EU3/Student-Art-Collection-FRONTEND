// DEPENDENCIES
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
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
  test('Login form renders', () =>{
    expect(wrapper).toBeDefined()
  })
});
