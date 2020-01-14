import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

const StyledModal = styled.div`

width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.5);  
position: fixed;
z-index: 99;
display: none

.modal {
  width: 80vw;
  height: 80vh;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`

const openModalStyling = {
    display: 'flex'
}

function ArtViewModal(props) {

    const testFunc = e => {
        if(e.target.className !== 'modal'){
            props.toggleViewModal(!props.browseArtState.artModalOpen)
        }
        else {
            return null
        }
    }

    return (
        <StyledModal style={props.browseArtState.artModalOpen ? openModalStyling : null} onClick={testFunc}>
            <div className='modal' />
        </StyledModal>
    )
}

export default connect(state => state, actionCreators)(ArtViewModal);