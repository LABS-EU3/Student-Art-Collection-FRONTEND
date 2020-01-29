import React from 'react';
import styled from 'styled-components';
import StripeRegistrationButton from '../../Components/Stripe/RegistrationButton';
import Svg from '../../Assets/stripe_payment.svg'
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    margin-top: 10%;
    height: 53vh;
    h1 {
        text-align: center;
        font-size: 3rem;
    }
    img {
        width: 50%;

        &~div{
            align-items: center;
        }
    }
    div {
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
`;
export default function StripeRegistrationPage( ) {
    return (
        <Section>
                <h1>Hello Kindly click on the button to signup with Stripe</h1>
            <div>
                <img src={Svg} alt='stripe'/>
                <div>
                    <StripeRegistrationButton />
                </div>
                
            </div>
        </Section>
    )
}