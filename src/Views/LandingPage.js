import React from 'react'
import Navbar from '../Components/NavBar'
import Hero from '../Components/LandingComponents/Hero'
import Browse from '../Components/LandingComponents/BrowseSection'
import Mission from '../Components/LandingComponents/Mission'

function LandingPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <Browse />
        <Mission />
        </>
    )
}

export default LandingPage;