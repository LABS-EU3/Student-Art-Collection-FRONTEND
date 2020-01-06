import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledForm } from '../../Views/Login';
import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';

import ResetPasswordFormik from './ResetPasswordFormik';

const registerApi = process.env.URL || 'http://localhost:9000/resetpassword';

const initialValues = {
  email: ''
};

const ResetPasswordForm = ({ history, loadingStarted, loadingFinished }) => {
  const onResetPasswordHandle = (values, action) => {
    debugger;
    loadingStarted();
    axiosWithBase
      .post(registerApi, values)
      .then(res => {
        debugger;
        action.resetForm();
        loadingFinished();
        history.push('/resetpasswordsent');
      })
      .catch(error => {
        debugger;
        loadingFinished();
      });
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

export default connect(state => state, actionCreators)(ResetPasswordForm);
