import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Recent from './Recent'

test('renders one container with four images', () => {
    const { container } = render(<Router><Recent /></Router>)
    const items = container.querySelectorAll('img');
    expect(container.children.length).toBe(1);
    expect(items.length).toBe(4)
})

