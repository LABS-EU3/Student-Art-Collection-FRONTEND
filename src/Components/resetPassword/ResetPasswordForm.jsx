import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

import { StyledForm } from '../../Views/Login';

import ResetPasswordFormik from './ResetPasswordFormik';

const registerApi = process.env.URL || 'http://localhost:9000/resetpassword';

const initialValues = {
  email: ''
};

const ResetPasswordForm = () => {
  const onResetPasswordHandle = values => {
    debugger;
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onResetPasswordHandle}
        component={ResetPasswordFormik}
      />
    </div>
  );
  // const formik = useFormik({
  //   initialValues: {
  //     email: ''
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .email('Invalid email address')
  //       .required('Required')
  //   }),
  //   onSubmit: (values, { resetForm }) => {
  //     debugger
  //     axios
  //       .post(registerApi, values)
  //       .then(response => {
  //         debugger
  //         console.log(response);
  //         // resetForm();
  //       })
  //       .catch(error => console.log(error));
  //   }
  // });
  // return (
  //   <StyledForm onSubmit={formik.handleSubmit}>
  //     <label htmlFor="email">Email Address</label>
  //     <input
  //       id="email"
  //       name="email"
  //       type="email"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.email}
  //     />
  //     {formik.touched.email && formik.errors.email ? (
  //       <div>{formik.errors.email}</div>
  //     ) : null}
  //     <button type="submit">Submit</button>
  //   </StyledForm>
  // );
};

export default ResetPasswordForm;
