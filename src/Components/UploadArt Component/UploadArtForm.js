import React  from 'react';
import {Form, Field, ErrorMessage } from 'formik';
import { StyledForm, StyledError } from './UploadArtFormStyle';

function UploadArtForm () {
    return(
        <StyledForm>
        <StyledError name='name' component='div' />
        <Field name='name' type='text' placeholder='name' />
        <StyledError name='artistName' component='div' />
        <Field name='artistName' type='text' placeholder='artistName' />
        <StyledError name='description' component='div' />
        <Field name='description' type='text' placeholder='description' />
        <StyledError name='category' component='div' />
        <Field name='category' type='text' placeholder='category' />
        <StyledError name='price' component='div' />
        <Field name='price' type='text' placeholder='price' />
        <StyledError name='medium' component='div' />
        <Field name='medium' type='text' placeholder='medium' />
        <StyledError name='subject' component='div' />
        <Field name='subject' type='text' placeholder='subject' />
        <StyledError name='material' component='div' />
        <Field name='material' type='text' placeholder='material' />
        <StyledError name='width' component='div' />
        <Field name='width' type='text' placeholder='width' />
        <StyledError name='height' component='div' />
        <Field name='height' type='text' placeholder='height' />
        <StyledError name='style' component='div' />
        <Field name='style' type='text' placeholder='style' />

        <button type="submit">Upload Art</button>
        </StyledForm>
    )
};

export default UploadArtForm;
