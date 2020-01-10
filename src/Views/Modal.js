import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const BackgroundStyled = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color:red;
position: absolute;
z-index:99;
opacity: 0.5;

.Upload {
    display: 'flex';
    width: '100%';
    background-color: 'blue';
}
.upload{
	width: 900px;
	background: white;
	border: 6px solid green;
}
.form-group{
	width: 450px;
	background: white;
	border: 6px solid green;
}
.description{
	width: 900px;
	background: white;
	border: 6px solid green;
}
.width{
	width: 300px;
	background: white;
	border: 6px solid green;
}
`;



const initialUploadArtValues = {
    title: '',
    artistName: '',
    description: '',
    width: '',
    height: '',
    quantity: '',
    materials: '',
    style: '',
    medium: '',
    price: ''
  };

export function Modal () {
    return (
        <BackgroundStyled>
        <Formik
                initialValues={{
                    initialUploadArtValues
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required('Title is required'),
                    artistName: Yup.string()
                        .required('Artist Name is required'),
                    description: Yup.string()
                        .required('Description is required'),
                    width: Yup.string()
                        .required('Width is required'),
                    height: Yup.string()
                        .required('Height is required'),
                    quantity: Yup.string()
                        .required('Quantity is required'),
                    materials: Yup.string()
                        .required('Materials is required'),
                    style: Yup.string()
                        .required('Style is required'),
                    medium: Yup.string()
                        .required('Medium is required'),
                    price: Yup.string()
                        .required('Price is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="upload">
                            <Field name="upload" type="text" placeholder ="Attach File" className={'form-control' + (errors.upload && touched.upload ? ' is-invalid' : '')} />
                            <ErrorMessage name="upload" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="title" type="text" placeholder ="Title" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="artistname" type="text" placeholder ="Artist Name" className={'form-control' + (errors.artistName && touched.artistName ? ' is-invalid' : '')} />
                            <ErrorMessage name="artistName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="description">
                            <Field name="description" type="text" placeholder ="Description" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                            <ErrorMessage name="description" component="div" className="invalid-feedback" />
                        </div>
                        <div className="width">
                            <Field name="width" type="text" placeholder ="Width" className={'form-control' + (errors.width && touched.width ? ' is-invalid' : '')} />
                            <ErrorMessage name="width" component="div" className="invalid-feedback" />
                        </div>
                        <div className="width">
                            <Field name="height" type="text" placeholder ="Height" className={'form-control' + (errors.height && touched.height ? ' is-invalid' : '')} />
                            <ErrorMessage name="height" component="div" className="invalid-feedback" />
                        </div>
                        <div className="width">
                            <Field name="quantity" type="text" placeholder ="Quantity" className={'form-control' + (errors.quantity && touched.quantity ? ' is-invalid' : '')} />
                            <ErrorMessage name="quantity" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="materials" type="text" placeholder ="Materials" className={'form-control' + (errors.materials && touched.materials ? ' is-invalid' : '')} />
                            <ErrorMessage name="materials" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="style" type="text" placeholder ="Style" className={'form-control' + (errors.style && touched.style ? ' is-invalid' : '')} />
                            <ErrorMessage name="style" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="medium" type="text" placeholder ="Medium" className={'form-control' + (errors.medium && touched.medium ? ' is-invalid' : '')} />
                            <ErrorMessage name="medium" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="price" type="text" placeholder ="Price" className={'form-control' + (errors.price && touched.price ? ' is-invalid' : '')} />
                            <ErrorMessage name="price" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Upload</button>
                        </div>
                    </Form>
                )}
            />

        </BackgroundStyled>
    )
}


export default Modal;