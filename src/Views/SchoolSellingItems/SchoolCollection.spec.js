import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SchoolCollection from './SchoolCollectionItem';

describe('<SchoolCollection />', () =>{
    test('should render the component', () =>{
        const { container } = render(<SchoolCollection art={{
            name: 'hello',
            price: 2,
            artistName: 'hello'
        }}/>);
        expect(container).toBeInTheDocument()
    })
})