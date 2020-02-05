import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import MessagingButton from './MessagingButtons';

describe('<MessagingButton/>', ()=>{
    test('MessagingButton should be renedered', () =>{
        const {container} = render(<Router> <MessagingButton /></Router>)
        expect(container).toBeInTheDocument();
    })
})