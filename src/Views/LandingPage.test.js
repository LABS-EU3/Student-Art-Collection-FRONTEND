import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import LandingPage from './LandingPage'

test('renders all 6 sub components', () => {
    const { container, getByText } = render(<Router><LandingPage /></Router>)
    const heroText = getByText(/BUY ART/i)
    
    expect(container.children.length).toBe(5);
    expect(heroText).toBeInTheDocument();
})

