import React from 'react';
import styled from 'styled-components';
import './SocialAuthButton.css';
import GoogleIcon from '../Assets/google.png'
export default function SocialAuthButton(props) {
const display = props.isSchool ? "none" : "flex";
const Button = styled.div`
    display: ${display};
    justify-content: center;
    margin: 1rem 4rem;
    a {
        margin: 0 1rem; 
        &:hover{
          opacity: 0.7;
          transition: opacity 0.1s ease-in-out;
        }
    }
    @media (max-width:600px) {
        margin: 1rem;
        span.label {
            display: none;
        }
    }
`;
    return (
        <Button>
         <span className="label">Buyer Sign in with:</span>
        <a href={props.url}>
                <div id="customBtn" className="customGPlusSignIn">
                    <img src={GoogleIcon} alt="google icon" className="icon"/>
                    <span className="buttonText">Google Sign In</span>
                </div>
         </a>
        </Button>
    )
}