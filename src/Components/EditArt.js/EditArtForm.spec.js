import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

import EditArtForm from './EditArtForm';

describe('<EditArtForm />', () =>{
    test('should render the form', () =>{
        const { container } = render(<EditArtForm />)
        expect(container).toBeInTheDocument()
    })
    test('form actually exists', () =>{
        const { queryByTestId } = render(<EditArtForm />)
        expect(queryByTestId('editForm')).toBeDefined()
    })
})