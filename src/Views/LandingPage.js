import React from 'react'
import Hero from '../Components/LandingComponents/Hero'
import Browse from '../Components/LandingComponents/BrowseSection'
import Mission from '../Components/LandingComponents/Mission'
import Recent from '../Components/LandingComponents/Recent'
import Footer from '../Components/LandingComponents/Footer'

function LandingPage() {
    return (
        <>
        <Hero />
        <Browse />
        <Mission />
        <Recent />
        <Footer />
        </>
    )
}

export default LandingPage;