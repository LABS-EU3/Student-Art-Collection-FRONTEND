import React from 'react'
import styled from 'styled-components'
import Mail from '../Assets/confirmation.svg'

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
        width: 40%;

        img {
            max-width: 100%;
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
            font-size: 2.5rem;
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

            @media(max-width: 350px) {
                font-size: 1.3rem;
            }
        }

        
    }
`

function ConfirmationSent() {
    return (
        <ConfirmationContainer>
            <div className="img-cont">
                <img src={Mail} alt="Mail" />
            </div>
            <div className="text-cont">
                <h3>A verification link has been sent to your email account</h3>
                <p>Please click on that link to verify your email and finish the registration process. </p>
            </div>
        </ConfirmationContainer>
    )
}

export default ConfirmationSent;