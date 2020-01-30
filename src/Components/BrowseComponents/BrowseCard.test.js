// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, queryByTestId } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import BrowseCard from './BrowseCard';
import { toggleViewModal } from '../../store/Actions/actionCreators';

let wrapper;

const browseArtState = {
  image: 'testname',
  alt: 'test alt',
  title: 'test title',
  artistName: 'test artist name',
  dimensions: '30 x 30',
  price: 99
};

beforeEach(() => {
  wrapper = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <BrowseCard
              image={browseArtState.image}
              alt={browseArtState.alt}
              title={browseArtState.title}
              artistName={browseArtState.artistName}
              dimensions={browseArtState.dimensions}
              price={browseArtState.price}
            />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(cleanup);

describe('component render', () => {
  test('render photo', () => {
    expect(wrapper.queryByTestId('artPhoto')).toHaveAttribute(
      'alt',
      'test alt'
    );
    expect(wrapper.queryByTestId('artPhoto')).toHaveAttribute(
      'src',
      'testname'
    );
  });
  test('renders card text', () => {
    expect(wrapper.queryByText(/test title/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/test artist name/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/30 x 30/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/99/)).toBeInTheDocument();
  });
});
