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
                    <div className="img-cont">
                        <img src={Success} alt='Purchase successfull' />
                    </div>
                    <h1>Purchase Successful!</h1>
                    <p>Order of item <span>#{props.browseArtState.artInModal._id}</span> was a success. You can contact the seller
                    through your dashboard or await contact regarding payment and collection.</p>
                </StyledSuccessfulModal>
            </div>
        </StyledModal>
    )
}

export default connect(state => state, actionCreators)(SuccessfulPurchase);