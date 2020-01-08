import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Browse from './BrowseSection'

test('renders one container with four images', () => {
    const { container } = render(<Router><Browse /></Router>)
    const items = container.querySelectorAll('img');
    expect(container.children.length).toBe(1);
    expect(items.length).toBe(4)
})

