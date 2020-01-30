import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 430px;
    height: 55px;
    margin: 1rem 0;
    padding-left: 1rem;
    font-size: 1.5rem;
    background-color: rgba(238, 243, 248, 0.5);
    border: 1px solid ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    :hover {
      background-color: rgba(238, 243, 248, 0.1);
      transition: all 0.3s ease-in-out;
    }

    :focus {
    border: 1px solid ${props => props.theme.lightGrey};
    outline: none;
    }
  }

  .links {
    width: 430px;
    display: flex;
    justify-content: space-evenly;
    padding: 0 1rem;
    a {
      font-size: 1.2rem;
      color: ${props => props.theme.lightGrey};

      :hover {
        color: ${props => props.theme.black};
        text-decoration: underline;
      }
    }
  }

  button {
    margin: 2.5rem 0;
    background-color: ${props => props.theme.buttonOrange};
    color: ${props => props.theme.white};
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    padding: 0.6rem 5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
    :focus {
      outline: none;
    }
  }
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const LoginForm = () => {
  return (
    <StyledDiv>
      <StyledForm>
        <Field
          name="email"
          type="email"
          data-testid="emailField"
          className="field"
          placeholder="Enter your email"
        />
        <StyledError name="email" component="div" />
        <Field
          name="password"
          type="password"
          data-testid="passwordField"
          placeholder="Enter your password"
        />
        {/* <StyledError name="password" component="div" /> */}
        <div className="links">
          <Link to="/resetpasswordrequest">Forgetten password?</Link>
          <Link to="/signup">Not yet a member? Sign up</Link>
        </div>
        <button type="submit">Login</button>
      </StyledForm>
      {/* <SocialAuthButton isSchool={false} url={baseURL + "/auth/google"} />   */}
    </StyledDiv>
  );
};

export default connect(state => state, actionCreators)(LoginForm);
