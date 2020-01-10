import React from 'react';
import styled from 'styled-components'
import HeroImage from '../Assets/contactus.svg'

const StyledContact = styled.div`
width: 100vw;
height: 90vh;
display: flex;
align-items: center;
font-family: 'Roboto', sans-serif;

    .contactContainer {
        width: 100vw;
        height: 70vh;
        display: flex;
        align-items: center;

        .contactLeft {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-left: 150px;
            padding-right: 70px;
            padding-top: 40px;


            h1 {
                font-size: 4rem;
                font-weight: 200;
                margin-bottom: 20px;
            }

            p {
                font-size: 1.5rem;
            }
        }

        .contactRight {
        width: 44%;
        height: 100%;

        img {
            max-width: 100%;
            height: auto;
            margin-top: 30px;
        }
        }
    }
`

function ContactPage() {
    return (
        <StyledContact>
            <div className="contactContainer">
                <div className="contactLeft">
                    <h1>Contact Us</h1>
                    <p>Want to get in touch? Use the form below and we will get back to you
                        as soon as possible.
                    </p>
                </div>
                <div className="contactRight">
                    <img src={HeroImage} alt="Man with mail" />
                </div>
            </div>
        </StyledContact>
    )
}

export default ContactPage;