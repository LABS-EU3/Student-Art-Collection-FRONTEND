import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import ConfirmationSent from './ConfirmationSent'

test('render 1 child', () => {
    const { container } = render(<Router><ConfirmationSent /></Router>)
    expect(container.children.length).toBe(1);
})

