import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import { StyledModal, openModalStyling } from './ArtViewModalStyling';

function ArtViewModal(props) {

    const closeModal = e => {
        if(e.target.className !== 'modal'){
            props.toggleViewModal(!props.browseArtState.artModalOpen)
        }
        else {
            return null;
        }
    }
    
    return (
        <StyledModal style={props.browseArtState.artModalOpen ? openModalStyling : null} onClick={closeModal}>
            <div className='modal' />
        </StyledModal>
    )
}

export default connect(state => state, actionCreators)(ArtViewModal);