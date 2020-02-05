import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';

// CONFIG
import { persistor } from '../../store/index';

// COMPONENTS

import UploadedArt from './UploadedArt';


let wrapper;
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
              <UploadedArt 
                  match={{params: {id: '1'}}}
              />
            </Router>
        </PersistGate>
      </Provider>
    );
  });
  afterEach(cleanup);
  test('UploadedArt to be rendered', () =>{
      expect(wrapper).toBeDefined();

  })
})
