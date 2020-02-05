import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import DisplayArtModal from './DisplayArtModal';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <DisplayArtModal />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(rtl.cleanup);

describe('<DisplayArtModal />', () =>{
    test('should render DisplayArtModal', () =>{
        expect(wrapper).toBeDefined()
    })
})