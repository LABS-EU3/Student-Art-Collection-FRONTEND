import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Spinner from '../../Components/Spinner';
import { axiosWithBase } from '../../AxiosCustom';
import CheckoutForm from './CheckoutForm';

function Payment(props) {
    const [spinner, updateSpinner] = useState(true);
    useEffect(()=>{
        console.log({props})
        const {artInModal} = props.state.browseArtState
        console.log(artInModal);
        if(!Object.keys(artInModal).length){
             props.history.push('/browse');
        }
        const data = {
            totalAmount: artInModal.price,
            buyerId: props.state.loggedInUser._id,
            quantity: 1,
            schoolId: artInModal.userId._id,
            stripeUserId: artInModal.userId.stripe_user_id,
            metadata: {
                school: artInModal.userId,
                buyer: props.state.loggedInUser,
                product: artInModal
            }
        }
        axiosWithBase()
            .post('url', data)
            .then(() => {
                updateSpinner(false)
            })
            .catch(() => updateSpinner(false))
    })
    return (
        <div>
            {spinner ? <Spinner/> : (
            <StripeProvider apiKey="pk_test_lW1J20zz5XlCFJ4QCBnfx8GG00J7WlDte4">
                <Elements>
                    <CheckoutForm />
                </Elements>
            </StripeProvider>
            )}
        </div>
    )
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(Payment);