import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as rtl from '@testing-library/react'
import Register from './Register'
import '@testing-library/jest-dom/extend-expect'

test('renders correct title', () => {
    const { getByText } = rtl.render(<Router><Register /></Router>)
    const mainTitle = getByText(/register/i)
    expect(mainTitle).toBeInTheDocument()
})

test('button with toggleButton class exists', () => {
    const { container } = rtl.render(<Router><Register /></Router>)
    const toggleButton = container.querySelector('.toggleButton')
    expect(toggleButton).not.toBe(null)
})

test('renders the form', () => {
  const { container, getByText } = rtl.render(<Router><Register /></Router>)
  const firstName = getByText(/First Name/i)
  const lastName = getByText(/Last Name/i)
  const emailField = getByText(/e-mail/i)
  const passwordField = getByText(/password/i)
  
  expect(container.children.length).toBe(1);
  expect(passwordField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
})

test('checks the button changes buyer form to school form', () => {
  const { container, getByText } = rtl.render(<Router><Register /></Router>)
  const toggleButton = container.querySelector('.toggleButton')
  const buyerButton = getByText(/buyer/i)

  expect(buyerButton).toHaveClass('greenButton')
  rtl.fireEvent.click(toggleButton)
  expect(buyerButton).toHaveClass('greyButton')
})

test('checks the button changes buyer form to school form', () => {
  const { container, getByText } = rtl.render(<Router><Register /></Router>)
  const toggleButton = container.querySelector('.toggleButton')
  const emailField = getByText(/e-mail/i)
  const passwordField = getByText(/password/i)
  const firstName = getByText(/First Name/i)
  const lastName = getByText(/Last Name/i)

  rtl.fireEvent.click(toggleButton)
  
  // expect(firstName).not.toBeInTheDocument();
  // expect(lastName).not.toBeInTheDocument();
  expect(schoolName).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
})