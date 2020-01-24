import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import { ToastContainer, toast } from 'react-toastify';

import { StyledModal, openModalStyling } from './ArtViewModalStyling';
import { Route } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import DisplayArt from '../Components/BuyModalComponents/DisplayArtModal';
import SuccessfulPurchase from '../Components/BuyModalComponents/SuccessfulPurchase';
import { axiosWithBase } from '../AxiosCustom';

function ArtViewModal(props) {
    const [requestingPurchase, setRequestingPurchase] = useState(false);

    const closeModal = e => {
        if (e.target.className === 'close') {
            props.toggleViewModal(!props.browseArtState.artModalOpen)
            props.history.push('/browse')
        }
        else {
            return null;
        }
    }

    const clickBuy = () => {
        if (props.loggedInUser._id) {
            const details = {
                buyerId: props.loggedInUser._id,
                schoolId: props.browseArtState.artInModal.userId,
                quantity: 1,
                totalAmount: props.browseArtState.artInModal.price,
                status: "completed"
            }
            debugger;
            props.history.push('/payment')
            // setRequestingPurchase(true);
            // axiosWithBase()
            //     .post(`/art/buyart/${props.browseArtState.artInModal._id}`, details)
            //     .then(() => {
            //         setRequestingPurchase(false);
            //         props.history.push('/browse/success');
            //     })
            //     .catch(err => {
            //         console.log(err.response);
            //         setRequestingPurchase(false);
            //         toast.error("There was a problem with your purchase")
            //     })
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
        <>
            <Route
                exact path="/browse"
                render={props => <DisplayArt
                    {...props}
                    closeModal={closeModal}
                    clickBuy={clickBuy} />}
            />
            <Route
                exact path="/browse/success"
                render={props => <SuccessfulPurchase
                    {...props}
                    closeModal={closeModal}
                />} />
            <ToastContainer
                position="bottom-center"
                bodyClassName="toast"
                autoClose={3000}
                closeButton={false}
            />
        </>
    )

}

export default connect(state => state, actionCreators)(ArtViewModal);
