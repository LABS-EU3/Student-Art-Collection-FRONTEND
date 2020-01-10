import React, { useState } from 'react';
import styled from 'styled-components'
import { Formik } from 'formik';
import * as yup from 'yup';
import HeroImage from '../Assets/contactus.svg'
import SuccessImage from '../Assets/success1.svg'
import ContactForm from '../Components/ContactForm';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    name: yup
        .string()
        .required()
        .min(2),
    message: yup
        .string()
        .required(),
});

const initialValues = {
    email: '',
    name: '',
    message: ''
};

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
                margin-bottom: 4rem;
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

const StyledForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ‘Roboto’, sans-serif;
`;

const StyledSuccess = styled.div`
width: 380px;
height: 380px;
display: flex;
flex-direction: column;
align-items: center;

h3 {
    font-size: 2rem;
    padding-bottom: 2rem;
}
    img {
        max-width: 100%;
        height: auto;
    }
`

function ContactPage() {
    const [submmited, setSubmitted] = useState(false);

    const submitMessage = (values, actions) => {
        //Console log temporary until endpoit is working
        console.log(values);
        actions.resetForm();
        setSubmitted(true);
    };
    return (
        <StyledContact>
            <div className="contactContainer">
                <div className="contactLeft">
                    <h1>Contact Us</h1>
                    <p>Want to get in touch? Use the form below and we will get back to you
                        as soon as possible.
                    </p>
                    {!submmited ?
                        <StyledForm>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={submitMessage}
                                component={ContactForm}
                            />
                        </StyledForm>
                        : <StyledSuccess>
                            <h3>Message Sent!</h3>
                            <img src={SuccessImage} alt='tick!' />
                        </StyledSuccess>
                    }
                </div>
                <div className="contactRight">
                    <img src={HeroImage} alt="Man with mail" />
                </div>
            </div>
        </StyledContact>
    )
}

export default ContactPage;