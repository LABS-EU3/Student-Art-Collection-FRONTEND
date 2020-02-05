import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MessagePreview from './MessagePreview';

describe('<MessagePreview />', () =>{
    test('should return', () =>{
        const {container} = render(<Router> <MessagePreview /> </Router>)
        expect(container).toBeInTheDocument()
    })
})
