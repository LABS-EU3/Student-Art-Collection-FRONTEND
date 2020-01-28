import React from 'react';
import CallBackPage from './CallBackPage';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'jest-mock-axios';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../../store';


let wrapper;
const push = (arg) => arg
beforeEach( () =>{
    wrapper = rtl.render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <CallBackPage 
              location={'search'}
              history={{push: push}}
              />
            </Router>
          </PersistGate>
        </Provider>
      );
});

afterEach((done) => {
    rtl.cleanup
    axiosMock.reset();
    done()
});
test('expect the component to have been mounted', async(done) =>{
    axiosMock.mockResponse({data: []})
    await rtl.waitForElement(() => wrapper)
    expect(wrapper).toBeDefined()
    done()
})