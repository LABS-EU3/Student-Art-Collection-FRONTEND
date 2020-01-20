import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { StyledModal, openModalStyling, StyledSuccessfulModal } from '../../Views/ArtViewModalStyling';
import Success from '../../Assets/purchasesuccess.svg'


function SuccessfulPurchase(props) {
    return (
        <StyledModal >
            <div className='close' style={props.browseArtState.artModalOpen ? openModalStyling : null} onClick={props.closeModal}>
                <StyledSuccessfulModal>
                    {/* <img src={Success} alt='Purchase successfull' /> */}
                </StyledSuccessfulModal>
            </div>
        </StyledModal>
    )
}

export default connect(state => state, actionCreators)(SuccessfulPurchase);