import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'jest-mock-axios';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SchoolsSoldItems from './SchoolsSoldItems';
import {store, persistor} from '../../store'

let wrapper;

beforeEach( () =>{
    wrapper = rtl.render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <SchoolsSoldItems 
              location={'search'}
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


describe('', () =>{
    
    it('should return have the nav items', () =>{
        expect(wrapper.queryByText('All')).toBeInTheDocument()
        expect(wrapper.queryByText('Pending')).toBeInTheDocument()
        expect(wrapper.queryByText('Sent')).toBeInTheDocument();
    });

    it('should return a h1 because no art exists', async(done) => {
        axiosMock.mockResponse({data: []})
        await rtl.waitForElement(() => wrapper.queryByText("You haven't ordered any art"));
        expect(wrapper.queryByText("You haven't ordered any art")).toBeInTheDocument();
        done()
    })
  
})