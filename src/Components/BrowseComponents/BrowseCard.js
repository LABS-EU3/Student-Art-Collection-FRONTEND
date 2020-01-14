import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { StyledBox } from './BrowseCardStyling';


function BrowseCard(props) {
    const populateViewModal = () => {
        props.toggleViewModal(!props.browseArtState.artModalOpen)
    }

    return (
        <StyledBox onClick={populateViewModal}>
            <img src={props.image} alt={props.alt} />
            <div className="art-info">
                <h2>{props.title}</h2>
                <h3>{props.artist}</h3>
                <h3>{props.dimensions}</h3>
                <h2>£{props.price}</h2>
            </div>
        </StyledBox>
    )
}

export default connect(state => state, actionCreators)(BrowseCard);
