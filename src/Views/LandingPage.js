import React from 'react'
import Navbar from '../Components/NavBar'
import Hero from '../Components/LandingComponents/Hero'
import Browse from '../Components/LandingComponents/BrowseSection'
import Mission from '../Components/LandingComponents/Mission'
import Footer from '../Components/LandingComponents/Footer'

function LandingPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <Browse />
        <Mission />
        <Footer />
        </>
    )
}

export default LandingPage;