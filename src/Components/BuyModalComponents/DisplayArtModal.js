import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/actionCreators';
import { StyledModal, openModalStyling } from '../../Views/ArtViewModalStyling';


function DisplayArt(props) {
    return (
        <StyledModal >
            <div className='close' style={props.browseArtState.artModalOpen ? openModalStyling : null} onClick={props.closeModal}>
                <div className='modal'>
                    <div className="left-modal">
                        <div className='cont'>
                            <img
                                src={props.browseArtState.artInModal.picture}
                                alt={props.browseArtState.artInModal.name}
                            />
                        </div>
                    </div>
                    <div className="right-modal">
                        <div className='cont'>
                            <div className="title">
                                <h1>{props.browseArtState.artInModal.name}</h1>
                                <h2>by {props.browseArtState.artInModal.artistName ? props.browseArtState.artInModal.artistName : 'Anonymous'}</h2>
                            </div>
                            <div className="about">
                                {props.browseArtState.artInModal.description ? props.browseArtState.artInModal.description : "No description provided"}
                            </div>
                            <div className="price">
                                <h3>£{props.browseArtState.artInModal.price}.00</h3>
                                <h4>{props.browseArtState.artInModal.height}cm x {props.browseArtState.artInModal.width}cm</h4>
                                <h5>Quantity: {props.browseArtState.artInModal.quantity < 1 || props.browseArtState.artInModal.quantity === null  ? "Out of Stock" : props.browseArtState.artInModal.quantity}</h5>
                            </div>
                            <button
                                style={props.loggedInUser.type === 'school' || props.browseArtState.artInModal.quantity < 1 ? { backgroundColor: 'grey', cursor: 'not-allowed' } : null}
                                onClick={props.loggedInUser.type === 'school' || props.browseArtState.artInModal.quantity < 1 ? null : props.clickBuy}
                                title={props.loggedInUser.type === 'school' ? "Schools cannot buy art." : null}
                            >
                                Buy
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledModal>
    )
}

export default connect(state => state, actionCreators)(DisplayArt);