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
    
    it('should render', () =>{
        expect(wrapper).toBeDefined();
    });

    it('should return a div because no art exists', async(done) => {
        axiosMock.mockResponse({data: []})
        await rtl.waitForElement(() => wrapper.queryByText("Nothing here yet"));
        expect(wrapper.queryByText("Nothing here yet")).toBeInTheDocument();
        done()
    })
  
})