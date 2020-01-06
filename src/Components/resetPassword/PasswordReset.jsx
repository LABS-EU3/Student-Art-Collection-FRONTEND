// DEPENDENCIES
import React from 'react';
import { Formik } from 'formik';
import queryString from 'query-string';
import * as yup from 'yup';

//HELPERS
import { axiosWithBase } from '../../AxiosCustom';

// COMPONENTS
import ResetPassword from './ResetPassword';

const initialValues = {
  password: ''
};

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Must be at least 8 charaters')
    .max(127, 'Must be shorter than 127')
    .required('This is a required field')
});

const PasswordReset = props => {
  const value = queryString.parse(props.location.search);
  const token = value.token;
  const submitNewPasswordHandler = (values, action) => {
    debugger;
    axiosWithBase
      .patch(`/newpassword?token=${token}`, values)
      .then(res => {
        debugger;
      })
      .catch(error => {
        debugger;
      });
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitNewPasswordHandler}
        component={ResetPassword}
      />
    </div>
  );
};

export default PasswordReset;
