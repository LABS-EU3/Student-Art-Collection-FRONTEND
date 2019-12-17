import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from './Components/NavBar'
import LandingPage from './Views/LandingPage'
import Register from './Views/Register'

function App() {
	return (
		<Router >
			<Navbar />
			<Route exact path='/' component={LandingPage} />
			<Route exact ='/register' component={Register} />
		</Router >
	)
}

export default App
