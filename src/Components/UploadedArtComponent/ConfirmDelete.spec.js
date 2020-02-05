import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ConfirmDelete from './ConfirmDelete';

describe('<ConfirmDelete />' ,() =>{
    test('should render the component', () =>{
        const { container, queryAllByText } = render(<ConfirmDelete 
            artToDelete={{name: 'Hello'}}
        />);

        const cancelBtn = queryAllByText(/Cancel/i);
        const deleteBtn = queryAllByText(/Delete/i);

        expect(container).toBeInTheDocument();
        expect(cancelBtn[0]).toBeInTheDocument();
        expect(deleteBtn[1]).toBeInTheDocument();
    })
})