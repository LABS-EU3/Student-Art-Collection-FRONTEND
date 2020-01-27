// DEPENDENCIES

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// HELPERS
import * as actionCreators from '../../store/Actions/actionCreators';
import { axiosWithBase } from '../../AxiosCustom';

// COMPONENTS
import ResetPasswordFormik from './ResetPasswordFormik';

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
  border: solid 0.5px ${props => props.theme.lightGrey};
  border-radius: 10px;
  padding: 80px 20px;
  font-family: ‘Roboto’, sans-serif;
`;

const ResetPasswordForm = ({ history, loadingStarted, loadingFinished }) => {
  const onResetPasswordHandle = (values, action) => {
    loadingStarted();
    axiosWithBase()
      .post('/resetpassword', values)
      .then(() => {
        action.resetForm();
        loadingFinished();
        history.push('/resetpasswordsent');
      })
      .catch(error => {
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
};

export default connect(state => state, actionCreators)(ResetPasswordForm);
