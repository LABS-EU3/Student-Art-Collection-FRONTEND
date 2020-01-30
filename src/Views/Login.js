import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Components/Spinner";

// COMPONENTS

import LoginForm from "../Components/Login/LoginForm";
import SocialAuthButton from '../Components/SocilaAuthButton';
import { axiosWithBase, baseURL } from "../AxiosCustom";

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(8)
});
const StyledBackground = styled.div`
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c7c7c7' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 500px;
    height: 500px;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 590px) {
      width: 100%;
      height: 100%;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: rgba(0,0,25,0.8);
      margin: 5rem 0 2.5rem 0;

      @media(max-width: 590px) {
        font-size: 1.8reml
      }
    }

    h2 {
      width: 70%;
      margin: 1em auto;
      overflow: hidden;
      text-align: center;
      font-weight:300;
      color: black;
    }
    h2:before, h2:after {
      content: "";
      display: inline-block;
      width: 50%;
      margin: 0 .5em 0 -55%;
      vertical-align: middle;
      border-bottom: 1px solid ${props => props.theme.lightGrey};
    }
    h2:after {
      margin: 0 -55% 0 .5em;
    }
`;

const StyledForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = ({
  history,
  errorLogin,
  resetErrorLogin,
  loadingStarted,
  loadingFinished,
  setLoggedInUser,
  logInError
}) => {
  const [spinning, setSpinning] = useState(false);
  const onLoginHandle = (values, action) => {
    loadingStarted();
    setSpinning(true);
    resetErrorLogin();
    axiosWithBase()
      .post("/login", values)
      .then(res => {
        setSpinning(false);
        loadingFinished();
        action.resetForm();
        resetErrorLogin();
        if (!res.data.token) {
          switch (res.data.message) {
            case "please check your email address to confirm account":
              history.push("/confirmation");
              break;
            default:
              return res.data.message;
          }
        } else {
          setSpinning(false);
          localStorage.setItem("authorization", res.data.token);
          setLoggedInUser(res.data.user);
          history.push("/");
        }
      })
      .catch(error => {
        loadingFinished();
        setSpinning(false);
        if (!error.response) {
          errorLogin("Something went wrong. Please contact us so we can help.");
          toast.error(
            "Something went wrong. Please contact us so we can help."
          );
        } else {
          switch (error.response.status) {
            case 404:
              errorLogin(error.message);
              toast.error(error.message);
              break;
            case 401:
              errorLogin(error.response.data);
              toast.error(error.response.data);
              break;
            default:
              errorLogin(
                "Something went wrong. Please contact us so we can help."
              );
              toast.error(
                "Something went wrong. Please contact us so we can help."
              );
          }
        }
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
        <h1>Log in to your account</h1>
        <StyledForm>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onLoginHandle}
            component={LoginForm}
          />
          <ToastContainer
            position="bottom-left"
            bodyClassName="toast"
            autoClose={3000}
            closeButton={false}
          />
        </StyledForm>
        <h2>or</h2>
        <SocialAuthButton url={baseURL + "/auth/google"} />
      </div>
    </StyledBackground>
  );
};

export default connect(state => state, actionCreators)(Login);
