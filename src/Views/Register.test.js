import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Register from './Register'

test('renders correct title', () => {
    const { getByText } = render(<Router><Register /></Router>)
    const mainTitle = getByText(/register/i)
    expect(mainTitle).toBeInTheDocument()
})

test('button with toggleButton class exists', () => {
    const { container } = render(<Router><Register /></Router>)
    const navigation = container.querySelector('.toggleButton')
    expect(navigation).not.toBe(null)
})

test('renders the form', () => {
  const { container, getByText } = render(<Router><Register /></Router>)
  const passwordField = getByText(/password/i)
  const emailField = getByText(/e-mail/i)
  
  expect(container.children.length).toBe(1);
  expect(passwordField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
})


