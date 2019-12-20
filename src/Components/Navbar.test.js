import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/index';

test('renders correct title in NavBar', () => {
  const { getByText } = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavBar />
        </Router>
      </PersistGate>
    </Provider>
  );
  const mainTitle = getByText(/artFunder/i);
  expect(mainTitle).toBeInTheDocument();
});

test('navigation class exists', () => {
  const { container } = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavBar />
        </Router>
      </PersistGate>
    </Provider>
  );
  const navigation = container.querySelector('.navigation');
  expect(navigation).not.toBe(null);
});

test('nav element has five children', () => {
  const { container } = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavBar />
        </Router>
      </PersistGate>
    </Provider>
  );
  const navigation = container.querySelector('nav');
  expect(navigation.children.length).toBe(6);
});
