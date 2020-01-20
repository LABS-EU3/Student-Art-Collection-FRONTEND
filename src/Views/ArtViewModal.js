import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import { StyledModal, openModalStyling } from './ArtViewModalStyling';
import Spinner from '../Components/Spinner';
import { axiosWithBase } from '../AxiosCustom';

function ArtViewModal(props) {
    const [requestingPurchase, setRequestingPurchase] = useState(false);

    const closeModal = e => {
        if (e.target.className === 'close') {
            props.toggleViewModal(!props.browseArtState.artModalOpen)
        }
        else {
            return null;
        }
    }

    const clickBuy = () => {
        if (props.loggedInUser._id) {
            const details = {
                buyerId: props.loggedInUser._id,
                SchoolId: props.browseArtState.artInModal.userId,
                quantity: 1,
                totalAmount: props.browseArtState.artInModal.price,
                status: "completed"
            }

            setRequestingPurchase(true);
            axiosWithBase()
                .post(`/art/buyart/${props.browseArtState.artInModal._id}`, details)
                .then(res => {
                    setRequestingPurchase(false);
                    console.log(res.data);
                })
                .catch(err => {
                    setRequestingPurchase(false);
                    console.log(err);
                })
        }
        else {
            props.history.push('/login');
        }
    }

    if (requestingPurchase) {
        return (
            <StyledModal >
                <div className='close' style={props.browseArtState.artModalOpen ? openModalStyling : null} onClick={closeModal}>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }} className='modal'>
                        <Spinner />
                    </div>
                </div>
            </StyledModal>
        )
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
                                onClick={props.loggedInUser.type === 'school' || props.browseArtState.artInModal.quantity < 1 ? null : clickBuy}
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

export default connect(state => state, actionCreators)(ArtViewModal);
