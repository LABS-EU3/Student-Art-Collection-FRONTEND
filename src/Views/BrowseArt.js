import React from 'react';

import BrowseHero from '../Components/BrowseComponents/BrowseHero';
import Filter from '../Components/BrowseComponents/Filter';
import BrowseNavigation from '../Components/BrowseComponents/BrowseNavigation';
import ArtContainer from '../Components/BrowseComponents/BrowseArtContainer';
import Footer from '../Components/LandingComponents/Footer';

function BrowseArt() {
    return (
        <>
            <BrowseHero />
            <Filter />
            <BrowseNavigation />
            <ArtContainer />
            <Footer />
        </>
    )
}

export default BrowseArt;