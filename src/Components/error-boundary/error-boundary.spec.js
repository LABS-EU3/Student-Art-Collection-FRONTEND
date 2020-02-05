import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';

import ErrorBoundary from './error-boundary.component';

describe('<ErrorBoundary />', () =>{
    test('it should render the component', () =>{
        const { container, queryAllByText } = render(<ErrorBoundary> <h1>Hello</h1></ErrorBoundary>);
        expect(container).toBeDefined();
        expect(queryAllByText(/hello/i)[0]).toBeInTheDocument()
    })
})