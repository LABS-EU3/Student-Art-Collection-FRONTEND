import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
import { temporaryData } from './TemporaryData';
import { StyledContainer } from './BrowseArtContainerStyling';

function ArtContainer() {
    const [displayedArt, setDisplayedArt] = useState(null);

    useEffect(() => {
        setDisplayedArt(temporaryData);
    }, [])
    return (
        <StyledContainer>
            <div className="grid-row">
                {displayedArt ? displayedArt.map(art => {
                    return (
                        <BrowseCard
                            image={art.image}
                            alt={art.title}
                            title={art.title}
                            artist={art.artist}
                            dimensions={art.dimensions}
                            price={art.price}
                            key={art.id}
                            id={art.id}
                        />
                    )
                })
            : null}
            </div>
        </StyledContainer>
    )
}

export default ArtContainer;