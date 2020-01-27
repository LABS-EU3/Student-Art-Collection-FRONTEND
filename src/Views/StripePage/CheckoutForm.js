import React from 'react';
import {
  CardExpiryElement,
  injectStripe,
  CardCVCElement,
  CardNumberElement
} from 'react-stripe-elements';
import styled from 'styled-components';
import CardSvg from '../../Assets/credit_card.svg';

const CheckoutSection = styled.section`
  padding: 1rem;
  background-color: #f6f9fc;
  height: 100vh;
  h1 {
    font-size: 3rem;
    margin: 1rem;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;
const Checkout = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 70vh;
  font-size: 18px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  img {
    max-width: 40%;
    @media (max-width: 500px) {
      display: none;
    }
  }
  label {
    color: #6b7c93;
    font-weight: 300;
    letter-spacing: 0.025em;
  }

  button {
    white-space: nowrap;
    border: 0;
    outline: 0;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background-color: #6772e5;
    text-decoration: none;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 10px;
    margin-left: 10px;
    width: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 1rem;
    padding: 1rem;
    width: 40%;
    @media (max-width: 500px) {
      width: 80%;
    }
    /* margin-bottom: 40px;
      padding-bottom: 40px;
      border-bottom: 3px solid #e6ebf1; */
  }

  button:hover {
    color: #fff;
    cursor: pointer;
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  input,
  .StripeElement {
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    font-size: 1em;
    font-family: 'Source Code Pro', monospace;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
  }

  input::placeholder {
    color: #aab7c4;
  }

  input:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }

  .StripeElement.IdealBankElement,
  .StripeElement.PaymentRequestButton {
    padding: 0;
  }
`;
function CheckoutForm(props) {
  const createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4'
          },
          padding
        },
        invalid: {
          color: '#9e2146'
        }
      }
    };
  };
  console.log({ props });
  const submit = async ev => {
    // User clicked submit
    ev.preventDefault();
    console.log({ev}, '<< event')
    console.log(props.payementIntent, '<< from the checkout form component');
    try {
      const result = await props.stripe.confirmCardPayment(
        props.payementIntent,
        {
          payment_method: {
            card: props.elements.getElement('card')
            // billing_details: {
            //   name: 'Jenny Rosen'
            // }
          }
        }
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CheckoutSection>
      <h1>Pay With Your Card Details</h1>
      <Checkout>
        <img src={CardSvg} alt="credit-card" />
        <form onSubmit={submit}>
          <label>
            Card number
            <CardNumberElement
              // onBlur={handleBlur}
              // onChange={handleChange}
              // onFocus={handleFocus}
              // onReady={handleReady}
              {...createOptions(props.fontSize)}
            />
          </label>
          <label>
            Expiration date
            <CardExpiryElement
              // onBlur={handleBlur}
              // onChange={handleChange}
              // onFocus={handleFocus}
              // onReady={handleReady}
              {...createOptions(props.fontSize)}
            />
          </label>
          <label>
            CVC
            <CardCVCElement
              // onBlur={handleBlur}
              // onChange={handleChange}
              // onFocus={handleFocus}
              // onReady={handleReady}
              {...createOptions(props.fontSize)}
            />
          </label>
          <button>Pay</button>
        </form>
      </Checkout>
    </CheckoutSection>
  );
}

export default injectStripe(CheckoutForm);
