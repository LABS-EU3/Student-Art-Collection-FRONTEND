// DEPENDENCIES
import React from 'react';
import { Formik } from 'formik';
import queryString from 'query-string';

//HELPERS
import { axiosWithBase } from '../../AxiosCustom';

// COMPONENTS
import ResetPassword from './ResetPassword';

const initialValues = {
  password: ''
};

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
        initialValues={initialValues}
        onSubmit={submitNewPasswordHandler}
        component={ResetPassword}
      />
    </div>
  );
};

export default PasswordReset;
