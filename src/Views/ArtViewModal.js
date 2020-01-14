import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import { StyledModal, openModalStyling } from './ArtViewModalStyling';

function ArtViewModal(props) {


    const closeModal = e => {
        if (e.target.className === 'close') {
            props.toggleViewModal(!props.browseArtState.artModalOpen)
        }
        else {
            return null;
        }
    }

    const clickBuy = () => {
        if(props.loggedInUser.userId){
            console.log("Art has been bought!")
        }
        else {
            props.history.push('/login');
        }
    }

    return (
        <StyledModal >
            <div className='close' style={props.browseArtState.artModalOpen ? openModalStyling : null} onClick={closeModal}>
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
                            <h2>by {props.browseArtState.artInModal.artist ? props.browseArtState.artInModal.picture : 'Anonymous'}</h2>
                            </div>
                            <div className="about">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> 
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div className="price">
                            <h3>£{props.browseArtState.artInModal.price}.00</h3>
                            <h4>{props.browseArtState.artInModal.height}cm x {props.browseArtState.artInModal.width}cm</h4>
                            </div>
                            <button onClick={clickBuy}>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledModal>
    )
}

export default connect(state => state, actionCreators)(ArtViewModal);




// <img src={props.browseArtState.artInModal.picture} alt="temporary" />
//                 <h1>{props.browseArtState.artInModal.name}</h1>
//                 <h1>{props.browseArtState.artInModal.price}</h1>
//                 <h1>{props.browseArtState.artInModal.height}</h1>
//                 <h1>{props.browseArtState.artInModal.width}</h1>