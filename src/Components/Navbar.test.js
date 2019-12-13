import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import NavBar from './NavBar'

test('renders correct title in NavBar', () => {
	const { getByText } = render(<Router><NavBar /></Router>)
	const mainTitle = getByText(/artFunder/i)
	expect(mainTitle).toBeInTheDocument()
})
