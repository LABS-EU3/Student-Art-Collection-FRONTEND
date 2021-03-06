import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import Error from "../helpers/Error";
import {
  validationSchemaSchool,
  validationSchemaBuyer
} from '../helpers/validationSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosWithBase } from '../AxiosCustom';
import AlgoliaPlaces from '../helpers/algolia';

const initalSignupForm = {
  name: '',
  description: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  userLocation: ''
};

export function RegisterForm(props) {
  return (
    <Formik
      validationSchema={
        props.isSchool ? validationSchemaSchool : validationSchemaBuyer
      }
      initialValues={initalSignupForm}
      onSubmit={(values, actions) => {
        const newUser = {
          type: props.isSchool ? "school" : "buyer",
          name: values.name,
          description: values.description,
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          password: values.password,
          userLocation: JSON.parse(localStorage.getItem("address")),
          location: JSON.parse(localStorage.getItem("coordinates"))
        };
        if (localStorage.getItem('address') === null) {
          toast.error('Location is required');
          actions.setSubmitting(false);
          props.loadingFinished();
          return;
        }
        props.loadingStarted();
        actions.setSubmitting(true);
        axiosWithBase()
          .post("/signup", newUser)
          .then(() => {
            actions.resetForm();
            actions.setSubmitting(false);
            props.loadingFinished();
            props.history.push("/confirmation");
            localStorage.removeItem("address");
            localStorage.removeItem("coordinates");
          })
          .catch(err => {
            toast.error(err.response.statusText);
            actions.setSubmitting(false);
            props.loadingFinished();
          });
      }}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        touched,
        handleSubmit,
        isSubmitting
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          {props.isSchool ? (
            <div data-testid="nameField" className="inputField">
              <input
                name="name"
                type="text"
                placeholder="Enter your school name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "has-error" : null}
              />
              <Error touched={touched.name} message={errors.name} />
            </div>
          ) : (
            <div data-testid="firstNameField" className="inputField">
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                id="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={
                  touched.firstName && errors.firstName ? "has-error" : null
                }
              />
              <Error touched={touched.firstName} message={errors.firstName} />
            </div>
          )}
          {props.isSchool ? (
            <div data-testid="descriptionField" className="inputField">
              <textarea
                name="description"
                type="text"
                placeholder="Enter school description (optional)"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={
                  touched.description && errors.description ? "has-error" : null
                }
              />
              <Error
                touched={touched.description}
                message={errors.description}
              />
            </div>
          ) : (
            <div data-testid="lastNameField" className="inputField">
              <input
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                id="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className={
                  touched.lastName && errors.lastName ? "has-error" : null
                }
              />
              <Error touched={touched.lastName} message={errors.lastName} />
            </div>
          )}
          <div data-testid="emailField" className="inputField">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
            />
            <Error touched={touched.email} message={errors.email} />
          </div>
          <div data-testid="passwordField" className="inputField">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={
                touched.password && errors.password ? "has-error" : null
              }
            />
            <Error touched={touched.password} message={errors.password} />
          </div>
          <div data-testid="locationField" className="inputField">
            <Field name="userLocation" component={AlgoliaPlaces} />
          </div>
          <button className="abutton" type="submit" disabled={isSubmitting} data-testid="submitButton">
            Sign up
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            closeButton={false}
            style={{
              "font-size": "1.5rem",
              width: "400px",
              "text-align": "center"
            }}
          />
        </StyledForm>
      )}
    </Formik>
  );
}
export default RegisterForm;
const test = {
  marginBottom: "1rem"
};
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  .inputField {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .has-error {
    border: solid 0.5px red;
  }
  .invalid {
    font-size: 1rem;
    color: red;
  }
  .valid {
    font-size: 1rem;
    color: ${props => props.theme.buttonOrange};
  }
  input {
    font-size: 1.2rem;
    padding: 10px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: rgba(238, 243, 248, 0.5);
  }
  textarea {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 5px;
    border: none;
    height: 145px;
    background-color: rgba(238, 243, 248, 0.5);
  }
  .abutton {
    margin: 20px;
    background-color: ${props => props.theme.buttonOrange};
    color: ${props => props.theme.white};
    border: none;
    border-radius: 5px;
    font-size: 1.6rem;
    padding: 0.6rem 5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
  }
`;
