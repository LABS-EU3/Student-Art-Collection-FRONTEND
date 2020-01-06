import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';

import ResetPasswordFormik from './ResetPasswordFormik';

const registerApi = process.env.URL || 'http://localhost:9000/resetpassword';

const initialValues = {
  email: ''
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
});

const StyledForm = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 0.5px lightgrey;
  border-radius: 10px;
  padding: 80px 20px;
  font-family: ‘Roboto’, sans-serif;
`;

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
        toast.error(error.response.data);
      });
  };
  return (
    <StyledForm>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onResetPasswordHandle}
        component={ResetPasswordFormik}
      />
      <ToastContainer
        position="bottom-left"
        bodyClassName="toast"
        autoClose={3000}
        closeButton={false}
      />
    </StyledForm>
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
