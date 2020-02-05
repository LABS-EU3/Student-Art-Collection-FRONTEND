import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/index';
import PrivateRoute from './PrivateRoute';

describe('<PrivateRoute />' , () => {
    xit('should return a component', () => {
        // const spy = jest.spyOn(Storage.prototype, 'setItem');
        Storage.prototype.getItem = jest.fn(() => 'authorization');
        const {  } = render(<Router>
            <PrivateRoute component={<h1>Hello</h1>}/>
        </Router>);

        expect(container).toContainElement(<h1>Hello</h1>)
    })
})