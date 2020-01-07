import React from 'react';
import styled from 'styled-components';

export default function SocialAuthButton(props) {
const display = props.isSchool ? "none" : "flex";
const Button = styled.div`
    display: ${display};
    justify-content: center;
    width: 30rem;
    height: 5rem;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    margin: .5rem;
    margin-bottom: 2rem;
    a {
        text-align: center;
        text-decoration: none;
        padding: 1rem;
        font-size: 2rem;
    }
    &:hover{
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
`;
    return (
        <Button >
            <a href={props.url}>Buyer Google Login</a>
        </Button>
    )
}