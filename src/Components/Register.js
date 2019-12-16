import React from "react";
// import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Error from "../helpers/Error";

const registerApi = "enter url here";

const initalSignupForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

export default function Register() {
  const sendUser = (formValues, actions) => {
    const newUser = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password
    };
    axios
      .post(registerApi, newUser)
      .then(res => {
        actions.resetForm();
      })
      .catch(err => {
        debugger;
      });
  };

  return (
    <>
      <h1>Register</h1>
      <h1>Buyer School</h1>
      <RegisterForm onSubmit={sendUser} />
    </>
  );
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "must be at least 3 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  lastName: Yup.string()
    .min(3, "must be at least 3 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  email: Yup.string()
    .email('must be a valid email address')
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  password: Yup.string()
    .min(8, "must be at least 8 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field")
});

function RegisterForm({ sendUser }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initalSignupForm}
      onSubmit={(values, sendUser, {setSubmitting, resetForm}) => {
        setSubmitting(true)
        // call axios function
        resetForm()
        setSubmitting(false)
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
        <Form onSubmit={handleSubmit}>
          {/* {JSON.stringify(values)} */}
          <div>
            <label htmlFor="firstName">First Name</label>
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
          <div>
            <label htmlFor="lastName">Last Name</label>
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
          <div>
            <label htmlFor="email">email</label>
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
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="text"
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

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}
