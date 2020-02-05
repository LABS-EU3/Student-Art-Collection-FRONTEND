// DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

// CONFIG
import { store, persistor } from '../../store/index';

// COMPONENTS

import Filter from './Filter';

let wrapper;
let setSearchValues;
beforeEach(() => {
  wrapper = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <Filter  setSearchValues={{ search: '', type: 'name' }}/>
          </Router>
        </Provider>
      </PersistGate>
    </Provider>
  );
});
afterEach(cleanup);

describe('renders filter options and buttons', () => {
  test('renders search button', () => {
    expect(wrapper.queryByText(/search/i)).toBeInTheDocument();
    expect(wrapper.queryByTestId('searchButton')).toBeInTheDocument();
  });
  test('renders reset button', () => {
    expect(wrapper.queryByText(/reset/i)).toBeInTheDocument();
    expect(wrapper.queryByTestId('resetButton')).toBeInTheDocument();
  });
});

describe('renders search feature', () => {
  test('renders search box', () => {
    expect(wrapper.queryByPlaceholderText('Search by...')).toBeInTheDocument();
  });
  test('renders field search selector', () => {
    expect(wrapper.queryByText(/title/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/artist/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/medium/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/description/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/style/i)).toBeInTheDocument();
  });
  test('click search', () => {
    rtl.fireEvent.click(wrapper.queryByText(/search/i));
  });
  test('selects has the proper value', () =>{
    const select = wrapper.queryByTestId('filterSelector');
    rtl.fireEvent.change(select, {target: {value: 'name'}});
    expect(select.value).toBe('name')
  });
  test('button resets', () => {
    const reset = jest.fn(() => {
      setSearchValues= { search: '', type: 'name' }
    });
    const button = wrapper.queryByTestId('resetButton');
    rtl.fireEvent.click(button, reset);
    expect(reset).toBeCalledTimes(0)
  })
});
