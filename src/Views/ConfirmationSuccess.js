import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Spinner from '../Components/Spinner'
import Success2 from '../Assets/success1.svg'
import Error from '../Assets/error.svg'

const baseURL = process.env.baseURL || 'http://localhost:9000'

const StyledConfirmationContainer = styled.div`
width: 50vw;
height: 60vh;
margin: 0 auto;
margin-top: 8rem;

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

const SpinnerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    margin-top: 20rem;
`

function ConfirmationSuccess(props) {
    const [display, setDisplay] = useState(null);
    const value = queryString.parse(props.location.search);
    const token = value.token;

    useEffect(() => {
        axios.patch(`${baseURL}/confirm`, {
            token
        })
            .then((response) => {
                if (response.data) {
                    setDisplay("Success")
                }
            })
            .catch(() => {
                setDisplay("Error")
            })
    }, [])

    if (display === 'Error') {
        return (
            <StyledConfirmationContainer>
                <div className="img-cont">
                    <img src={Error} alt="Error" />
                </div>
                <div className="text-cont">
                    <h3>Something went wrong</h3>
                    <p>Please <Link to='/help'>contact us</Link> for further help.   </p>
                </div>
            </StyledConfirmationContainer>
        )
    }

    else if (!display) {
        return (
            <SpinnerContainer>
                <Spinner />
            </SpinnerContainer>
        )
    }

    else if (display === "Success") {
        return (
            <StyledConfirmationContainer>
                <div className="img-cont">
                    <img src={Success2} alt="Successful registration" />
                </div>
                <div className="text-cont">
                    <h3>Your account is now confirmed</h3>
                    <p>Please <Link to='/myaccount'>click here</Link> to login and get started. </p>
                </div>

            </StyledConfirmationContainer>
        )
    }
}

export default ConfirmationSuccess;