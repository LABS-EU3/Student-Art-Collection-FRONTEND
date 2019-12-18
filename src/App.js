import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import LandingPage from './Views/LandingPage'
import ConfirmationSent from './Views/ConfirmationSent'
import ConfirmationSuccess from './Views/ConfirmationSuccess'


function App() {
	return (
		<>
		<Navbar />
		<Route exact path='/' component={LandingPage} />
		<Route path='/confirmation' component={ConfirmationSent} />
		<Route path='/success' component={ConfirmationSuccess} />
		</>
	)
}

export default App
