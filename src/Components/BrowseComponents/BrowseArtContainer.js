import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';
import BrowseCard from './BrowseCard';
import { StyledContainer } from './BrowseArtContainerStyling';
import Spinner from '../Spinner';
function ArtContainer(props) {
    const [displayedArt, setDisplayedArt] = useState(null);

    useEffect(() => {

        axiosWithBase()
            .get('/art')
            .then((res) => {
                props.fetchArt(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        props.toggleViewModal(false);
    }, [])
    return (
        <StyledContainer>
            <div className="grid-row">
                {props.browseArtState.artSorted ? props.browseArtState.artSorted.map(art => {
                    return (
                        <BrowseCard
                            image={art.picture}
                            alt={art.name}
                            title={art.name}
                            artist={art.artist}
                            dimensions={`${art.height} x ${art.width}`}
                            price={art.price}
                            key={art.id}
                            id={art.id}
                        />
                    )
                })
                    : null  
                }
            </div>
        </StyledContainer>
    )
}

export default connect(state => state, actionCreators)(ArtContainer);