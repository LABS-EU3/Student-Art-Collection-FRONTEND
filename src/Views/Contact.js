import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import HeroImage from '../Assets/contactus.svg'
import SuccessImage from '../Assets/success1.svg'
import ContactForm from '../Components/ContactForm/ContactForm';
import Spinner from '../Components/Spinner';
import { axiosWithBase } from '../AxiosCustom';
import { ToastContainer, toast } from 'react-toastify';

import { StyledContact, StyledForm, StyledSuccess, StyledSpinner } from './ContactStyle';

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
    const [spinning, setSpinning] = useState(false)

    const submitMessage = (values, actions) => {
        setSpinning(true);
        axiosWithBase()
            .post('/contactus', values)
            .then(() => {
                actions.resetForm();
                setSpinning(false);
                setSubmitted(true);
            })
            .catch(() => {
                setSpinning(false);
                toast.error("Error submitting message.")
            })
    };
    return (
        <StyledContact>
            <div className="contactContainer">
                <div className="contactLeft">
                    {spinning ? <StyledSpinner><Spinner /></StyledSpinner>
                        :
                        <>
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
                            <ToastContainer
                                position="bottom-left"
                                bodyClassName="toast"
                                autoClose={3000}
                                closeButton={false}
                            />
                        </>
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