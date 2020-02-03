import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import Error from '../helpers/Error';
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
          type: props.isSchool ? 'school' : 'buyer',
          name: values.name,
          description: values.description,
          firstname: values.firstName,
          lastname: values.lastName,
          email: values.email,
          password: values.password,
          userLocation: JSON.parse(localStorage.getItem('address'))
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
          .post('/signup', newUser)
          .then(() => {
            actions.resetForm();
            actions.setSubmitting(false);
            props.loadingFinished();
            props.history.push('/confirmation');
            localStorage.clear('address');
          })
          .catch(err => {
            debugger
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
                className={touched.name && errors.name ? 'has-error' : null}
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
                  touched.firstName && errors.firstName ? 'has-error' : null
                }
              />
              <Error
                touched={touched.firstName}
                message={errors.firstName}
                data-testid="errorFirstName"
              />
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
                  touched.description && errors.description ? 'has-error' : null
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
                  touched.lastName && errors.lastName ? 'has-error' : null
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
              className={touched.email && errors.email ? 'has-error' : null}
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
                touched.password && errors.password ? 'has-error' : null
              }
            />
            <Error touched={touched.password} message={errors.password} />
          </div>
          <div data-testid="locationField" className="inputField">
            <Field name="userLocation" component={AlgoliaPlaces} />
          </div>

          <button
            className="abutton"
            type="submit"
            disabled={isSubmitting}
            data-testid="submitButton"
          >
            Submit
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
              'font-size': '1.5rem',
              width: '400px',
              'text-align': 'center'
            }}
          />
        </StyledForm>
      )}
    </Formik>
  );
}

export default RegisterForm;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 90%;

  .inputField {
    display: flex;
    flex-direction: column;
    // margin: 2px 0;
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
    font-size: 1.8rem;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px ${props => props.theme.lightGrey};
    margin: 10px 0;
  }

  textarea {
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 5px;
    border: solid 0.5px ${props => props.theme.lightGrey};
    height: 80px;
  }

  .abutton {
    margin: 20px;
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
  }
`;
