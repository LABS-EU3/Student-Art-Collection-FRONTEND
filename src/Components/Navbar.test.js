import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import NavBar from './NavBar'

test('renders correct title in NavBar', () => {
	const { getByText } = render(<Router><NavBar /></Router>)
    const mainTitle = getByText(/artFunder/i)
    expect(mainTitle).toBeInTheDocument()
})

test('navigation class exists', () => {
    const { container } = render(<Router><NavBar /></Router>)
    const navigation = container.querySelector('.navigation')
    expect(navigation).not.toBe(null)
})
