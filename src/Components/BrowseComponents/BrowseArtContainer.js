import React from 'react';
import RecentCard from '../LandingComponents/RecentCard';
import { temporaryData } from './TemporaryData';
import { StyledContainer } from './BrowseArtContainerStyling';

function ArtContainer() {
    return (
        <StyledContainer>
            {temporaryData.map(art => {
                return (
                    <RecentCard
                        image={art.image}
                        alt={art.title}
                        title={art.title}
                        artist={art.artist}
                        dimensions={art.dimensions}
                        price={art.price}
                    />
                )
            })}
        </StyledContainer>
    )
}

export default ArtContainer;