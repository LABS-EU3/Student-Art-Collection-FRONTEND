import React from 'react';
import { Field } from 'formik';
import { StyledForm, StyledError } from './ContactFormStyle';

function ContactForm() {
    return (
        <StyledForm>
            <StyledError name='name' component='div' />
            <Field
                name='name'
                type='text'
                className='field'
                placeholder='Your Name'
            />
            <StyledError name='email' component='div' />
            <Field
                name='email'
                type='email'
                className='field'
                placeholder='Your Email'
            />
            <StyledError name='message' component='div' />
            <Field
                name='message'
                type='text'
                className='field message'
                placeholder='Your Message'
            />
            <button type="submit">Submit</button>
        </StyledForm>

    )
}

export default ContactForm;