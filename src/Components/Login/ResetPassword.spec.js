import React from 'react';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as rtl from '@testing-library/react';
import { render, cleanup } from '@testing-library/react';

import ResetPassword from './ResetPassword';
import { store, persistor } from '../../store'


let wrapper;
describe('<ResetPassword />', () =>{

    
    afterEach(cleanup);
    test('form actually exists', () =>{
        wrapper = render(
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Provider store={store}>
                <Router>
                    <ResetPassword  isLoading={false}/>
                </Router>
                </Provider>
            </PersistGate>
            </Provider>
        );
        expect(wrapper.queryByTestId('resetpassword')).toBeDefined()
    })
})