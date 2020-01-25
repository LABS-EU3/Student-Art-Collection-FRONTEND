import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Spinner from '../../Components/Spinner';
import { axiosWithBase } from '../../AxiosCustom';
import CheckoutForm from './CheckoutForm';

function Payment(props) {
    const [stripe, setStripe] = useState(null)
    const [spinner, updateSpinner] = useState(true);
    const [payementIntent, updatePaymentIntent] = useState(null)
    useEffect(()=>{
        if (window.Stripe) {
            setStripe(window.Stripe(process.env.REACT_APP_STRIPE_API_KEY));
          } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
              // Create Stripe instance once Stripe.js loads
              setStripe(window.Stripe(process.env.REACT_APP_STRIPE_API_KEY));
            });
          }
        const {artInModal} = props.state.browseArtState;
        console.log({artInModal})
        if(!Object.keys(artInModal).length){
             return props.history.push('/browse');
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
            .post('/payments/pamentintent', data)
            .then((res) => {
                console.log({res})
                // update payment intent to state here
                updatePaymentIntent(res.data.payementIntent)
                updateSpinner(false)
            })
            .catch(() => {
                updateSpinner(false)
            })
    }, []);
    console.log(process.env.REACT_APP_STRIPE_API_KEY)
    return (
        <div>
            {spinner ? <Spinner/> : (
            <StripeProvider stripe={stripe}>
                <Elements>
                    <CheckoutForm 
                        payementIntent={payementIntent}
                    />
                </Elements>
            </StripeProvider>
            )}
        </div>
    )
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(Payment);