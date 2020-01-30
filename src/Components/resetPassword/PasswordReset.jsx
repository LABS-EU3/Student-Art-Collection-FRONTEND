// DEPENDENCIES
import React, { useState } from "react";
import { Formik } from "formik";
import queryString from "query-string";
import * as yup from "yup";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

//HELPERS
import { axiosWithBase } from "../../AxiosCustom";
import * as actionCreators from "../../store/Actions/actionCreators";

// COMPONENTS
import ResetPassword from "./ResetPassword";
import Spinner from '../Spinner';

const StyledBackground = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c7c7c7' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 500px;
    height: 270px;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 590px) {
      width: 100%;
      height: 100%;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: rgba(0, 0, 25, 0.8);
      margin: 4rem 0 3.3rem 0;

      @media (max-width: 590px) {
        font-size: 1.8rem;
      }
    }
    p {
      font-size: 1.5rem;
      color: ${props => props.theme.lightGrey};
      width: 80%;
      text-align: center;
    }
  }
`;

const initialValues = {
  password: ""
};

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Must be at least 8 charaters")
    .max(127, "Must be shorter than 127")
    .required("This is a required field")
});

const PasswordReset = ({
  location,
  history,
  loadingStarted,
  loadingFinished
}) => {
  const [spinning, setSpinning] = useState(false);
  const value = queryString.parse(location.search);
  const token = value.token;
  const submitNewPasswordHandler = (values, action) => {
    setSpinning(true);
    loadingStarted();
    axiosWithBase()
      .patch(`/newpassword?token=${token}`, values)
      .then(() => {
        setSpinning(false);
        loadingFinished();
        action.resetForm();
        toast.success(
          "You have reset your password. You will be redirected to sign in page in 3 seconds"
        );
        setTimeout(() => {
          return history.push("/login");
        }, 3000);
      })
      .catch(error => {
        setSpinning(false);
        loadingFinished();
        toast.error(error.response.data);
      });
  };

  if (spinning) {
    return (
      <StyledBackground>
        <div className="container">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Spinner />
          </div>
        </div>
      </StyledBackground>
    );
  }

  return (
    <StyledBackground>
      <div className="container">
        <h1>Reset your password</h1>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submitNewPasswordHandler}
          component={ResetPassword}
        />
        <ToastContainer
          position="bottom-left"
          bodyClassName="toast"
          autoClose={3000}
          closeButton={false}
        />
      </div>
    </StyledBackground>
  );
};

export default connect(state => state, actionCreators)(PasswordReset);
