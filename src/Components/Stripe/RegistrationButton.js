import React from 'react';
import styled from 'styled-components';

const StripeConnect = styled.a`
    display: inline-block;
  margin-bottom: 1px;

  background-image: -webkit-linear-gradient(#28A0E5, #015E94);
  background-image: -moz-linear-gradient(#28A0E5, #015E94);
  background-image: -ms-linear-gradient(#28A0E5, #015E94);
  background-image: linear-gradient(#28A0E5, #015E94);

  -webkit-font-smoothing: antialiased;
  border: 0;
  padding: 1px;
  height: 30px;
  text-decoration: none;

  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;

  -moz-box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);

  cursor: pointer;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

    span {
        display: block;
        position: relative;
        padding: 0 12px 0 44px;
        height: 30px;

        background: #1275FF;
        background-image: -webkit-linear-gradient(#7DC5EE, #008CDD 85%, #30A2E4);
        background-image: -moz-linear-gradient(#7DC5EE, #008CDD 85%, #30A2E4);
        background-image: -ms-linear-gradient(#7DC5EE, #008CDD 85%, #30A2E4);
        background-image: linear-gradient(#7DC5EE, #008CDD 85%, #30A2E4);

        font-size: 14px;
        line-height: 30px;
        color: white;
        font-weight: bold;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);

        -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.25);
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);

        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;

        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 11px;
            top: 50%;
            width: 23px;
            height: 24px;
            margin-top: -12px;
            background-repeat: no-repeat;
            background-size: 23px 24px;
        }
    }

    &:before {
        background-image: url("data:image/png;base64,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");
}
`;
export default function StripeRegistration() {
    const stripeClientId = process.env.REACT_APP_STRIPE_CLIENT_ID
    const stripeLink = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${stripeClientId}`
    return (
        <>
            <StripeConnect 
                href={stripeLink} 
            >
                <span>Connect with Stripe</span>
            </StripeConnect>
        </>
    )
}