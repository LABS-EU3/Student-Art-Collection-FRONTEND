import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';

// CONFIG
import { persistor } from '../../store/index';

// COMPONENTS

import SellingNav from './SellingNav';

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
        notifications: 0,
        received: [{id: 1}],
        sent: [{id: 1}],
        notifications: 1
      }
    });
    wrapper = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
              <SellingNav 
                  match={{params: {id: '1'}}}
                //   messages={{}}
              />
            </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);

  test('SentFullView to be rendered', () =>{
      expect(wrapper).toBeDefined()
  })
})