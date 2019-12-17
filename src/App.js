import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import LandingPage from './Views/LandingPage'
import BuyerDashboard from './Views/BuyerDashboard'

function App() {
	return (
		<>
		<Navbar />
		<Route exact path='/' component={LandingPage} />
		<Route exact path='/myaccount' component={BuyerDashboard} />
		</>
	)
}

export default App
