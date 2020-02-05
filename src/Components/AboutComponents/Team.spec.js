import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Team from './Team';

describe('<Team />', () =>{
    test('Team should render', () =>{
        const {container} = render(<Team />)
        expect(container).toBeInTheDocument()
    })
})