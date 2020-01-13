import React from 'react';

import BrowseHero from '../Components/BrowseComponents/BrowseHero';
import Filter from '../Components/BrowseComponents/Filter';
import BrowseNavigation from '../Components/BrowseComponents/BrowseNavigation';
import ArtContainer from '../Components/BrowseComponents/BrowseArtContainer';

function BrowseArt() {
    return (
        <>
            <BrowseHero />
            <Filter />
            <BrowseNavigation />
            <ArtContainer />
        </>
    )
}

export default BrowseArt;