import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import AboutHero from './AboutHero';

describe("<AboutHero />", () =>{
    test('component AboutHero', () =>{
        const {container} = render(<AboutHero />);
        expect(container).toBeInTheDocument()
    })
})