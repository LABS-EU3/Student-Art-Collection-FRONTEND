// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import { queryByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import BrowseNavigation from './BrowseNavigation';

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <BrowseNavigation />
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(rtl.cleanup);

describe('it renders show filter button and sort type dropdow', () => {
  test('renders button', () => {
    expect(wrapper.queryByTestId('button')).toBeInTheDocument();
  });
  test('show filter button is displayed', () => {
    expect(wrapper.queryByText(/show filters/i)).toBeInTheDocument();
  });
  test('sorting drop down menu gets displayed', () => {
    expect(wrapper.queryByText(/newest/i)).toBeInTheDocument();
  });
});

describe('click changes text of button', () => {
  test('text of shoe filters turns into hide filters when clicked', () => {
    rtl.fireEvent.click(wrapper.queryByText(/show filters/i));
    expect(wrapper.queryByText(/hide filters/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/show filters/i)).not.toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/hide filters/i));
  });
  test('text of shoe filters turns back to show filters when clicked twice', () => {
    rtl.fireEvent.click(wrapper.queryByText(/show filters/i));
    rtl.fireEvent.click(wrapper.queryByText(/hide filters/i));
    expect(wrapper.queryByText(/hide filters/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/show filters/i)).toBeInTheDocument();
  });
});
