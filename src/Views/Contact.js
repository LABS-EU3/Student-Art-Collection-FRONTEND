import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import HeroImage from '../Assets/contactus.svg'
import SuccessImage from '../Assets/success1.svg'
import ContactForm from '../Components/ContactForm/ContactForm';

import { StyledContact, StyledForm, StyledSuccess } from './ContactStyle';

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