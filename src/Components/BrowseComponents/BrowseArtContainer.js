import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';
import BrowseCard from './BrowseCard';
import { StyledContainer, StyledEmptyContainer, StyledButtonContainer } from './BrowseArtContainerStyling';
import Spinner from '../Spinner';

function ArtContainer(props) {
    const [spinning, setSpinning] = useState(true);
    const [page, setPage] = useState(1)

    const changePage = (direction) => {
        if (direction === "plus") {
            setPage(page + 1);
        }
        else if (direction === "minus") {
            if (page > 1) {
                setPage(page - 1)
            }
        }
        return null;
    }

    useEffect(() => {
        axiosWithBase()
            .get(`/art?page=${page}&pagination=12`)
            .then((res) => {
                props.fetchArt(res.data.art)
                setSpinning(false);
            })
            .catch(() => {
                setSpinning(false);
            })
        props.toggleViewModal(false);
    }, [page])

    if (spinning) {
        return (
            <StyledEmptyContainer>
                <Spinner />
            </StyledEmptyContainer>
        )
    }

    else if (props.browseArtState.artSorted.length === 0) {
        return (
            <>
                <StyledEmptyContainer>
                    <h1>Nothing here!</h1>
                </StyledEmptyContainer>
                <StyledButtonContainer>
                    <button onClick={() => changePage('minus')}>Previous</button>
                </StyledButtonContainer>
            </>
        )
    }

    return (<>
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
        <StyledButtonContainer>
            {page === 1 ? null : <button onClick={() => changePage('minus')}>Previous</button>}
            {props.browseArtState.artSorted.length >= 12 ? <button onClick={() => changePage('plus')}>Next</button> : null}
        </StyledButtonContainer>
    </>
    )
}

export default connect(state => state, actionCreators)(ArtContainer);