import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

import Spinner from './AppSpinner';

describe('<Spinner />', () => {
    it('it should render App Spinner', () =>{
        const { container } = render(<Spinner />)
        expect(container).toBeInTheDocument()
    })
})