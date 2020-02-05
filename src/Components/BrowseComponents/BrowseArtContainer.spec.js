import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import axiosMock from 'jest-mock-axios';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, queryByTestId } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import BrowseArtContainer from './BrowseArtContainer';
import { toggleViewModal } from '../../store/Actions/actionCreators';

let wrapper;

const browseArtState = {
  image: 'testname',
  alt: 'test alt',
  title: 'test title',
  artistName: 'test artist name',
  dimensions: '30 x 30',
  price: 99,
  id: 1
};
describe('<Spinner />', () => {
    beforeEach(() => {
    wrapper = render(
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
            <Router>
                <BrowseArtContainer
                    image={browseArtState.image}
                    alt={browseArtState.alt}
                    title={browseArtState.title}
                    artist={browseArtState.artistName}
                    dimensions={browseArtState.dimensions}
                    price={browseArtState.price}
                    id={browseArtState.id}
                />
            </Router>
            </Provider>
        </PersistGate>
        </Provider>
    );
    });
    afterEach((done) => {
        cleanup
        axiosMock.reset()
        done()
    });
    describe('<BrowseArtContainer />', () =>{
        // axiosMock.mockResponse({data: [browseArtState]})
        test('renders the component', ()=>{
            expect(wrapper.getByTestId('spinner')).toBeDefined()
        })
    })
});