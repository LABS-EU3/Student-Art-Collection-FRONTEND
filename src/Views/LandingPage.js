import React from 'react'
import Navbar from '../Components/NavBar'
import Hero from '../Components/LandingComponents/Hero'
import Browse from '../Components/LandingComponents/BrowseSection'

function LandingPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <Browse />
        </>
    )
}

export default LandingPage;