import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Success2 from '../Assets/success1.svg'

const ConfirmationContainer = styled.div`
width: 50vw;
height: 60vh;
margin: 0 auto;
margin-top: 8rem;
// box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.04);

    @media(max-width: 800px){
        width: 80vw;
    }
 
    .img-cont {
        margin: 0 auto;
        width: 50%;

        img {
            max-width: 100%;
            opacity: 0.9;
            height: auto;
        }
    }

    .text-cont {
        width: 100%;
        margin: 0 auto;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Roboto', sans-serif;

        h3 {
            width: 80%;
            font-size: 3rem;
            text-align: center;

            @media(max-width: 350px) {
                font-size: 2rem;
            }
        }

        p {
            width: 60%;
            margin-top: 2rem;
            font-size: 1.8rem;
            text-align: center;
            color: rgba(0,0,0,0.8);
            line-height: 1.3;

            a {
                color: darkgreen;
                opacity: 1;
                transition: opacity 0.2s ease-in-out;

                &:hover {
                    opacity: 0.5;
                    transition: opacity 0.2s ease-in-out;
                }
            }

            @media(max-width: 350px) {
                font-size: 1.3rem;
            }
        }   
    }
`

function ConfirmationSuccess() {
    return (
        <ConfirmationContainer>
            <div className="img-cont">
                <img src={Success2  } alt="Successful registration" />
            </div>
            <div className="text-cont">
                <h3>Your account is now confirmed</h3>
                <p>Please <Link to='/myaccount'>click here</Link> to login and get started. </p>
            </div>
        </ConfirmationContainer>
    )
}

export default ConfirmationSuccess;