import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';
import BrowseCard from './BrowseCard';
import { StyledContainer, StyledEmptyContainer } from './BrowseArtContainerStyling';
import Spinner from '../Spinner';

function ArtContainer(props) {
    const [spinning, setSpinning] = useState(true);

    useEffect(() => {
        axiosWithBase()
            .get('/art?pagination=12')
            .then((res) => {
                props.fetchArt(res.data)
                setSpinning(false);
            })
            .catch(() => {
                setSpinning(false);
            })
        props.toggleViewModal(false);
    }, [])

    if (spinning) {
        return (
            <StyledEmptyContainer>
                <Spinner />
            </StyledEmptyContainer>
        )
    }

    else if (props.browseArtState.art.length === 0) {
        return (
            <StyledEmptyContainer>
                <h1>Nothing to show yet!</h1>
            </StyledEmptyContainer>
        )
    }

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
                            key={art.public_picture_id}
                            id={art.public_picture_id}
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