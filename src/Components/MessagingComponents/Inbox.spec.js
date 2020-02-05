import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup, render, queryByTestId } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../../store';

// COMPONENTS

import Index from './Inbox';
import MessagePreview from './MessagePreview';

let wrapper;

const recieved ={
    received :[{
       name: 'testname',
       subject: 'test alt',
       sentAt: 'test title',
       read: 'test artist name',
       id: '30 x 30',
   }]
}

describe('<Index />', () => {
    beforeEach(() => {
      wrapper = render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
              <Router>
                <Index 
                    messages={recieved}
                />
              </Router>
            </Provider>
          </PersistGate>
        </Provider>
      );
    });
    afterEach(cleanup);
    test('the Index page should render', () =>{
        expect(wrapper).toBeDefined();
    })
})
