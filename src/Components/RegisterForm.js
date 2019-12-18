import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import axios from "axios";
import Error from "../helpers/Error";
import {
  validationSchemaSchool,
  validationSchemaBuyer
} from "../helpers/validationSchema";

const registerApi = "enter url here";

const initalSignupForm = {
  schoolName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

export default function RegisterForm(props) {
  // const type = (props.isSchool)
  const showSchool = props.isSchool ? "flex" : "none";
  const showBuyer = !props.isSchool ? "flex" : "none";

  return (
    <Formik
      validationSchema={
        props.isSchool ? validationSchemaSchool : validationSchemaBuyer
      }
      initialValues={initalSignupForm}
      onSubmit={(values, actions) => {
        const newUser = {
          type: props.isSchool ? "School" : "Buyer",
          schoolName: values.schoolName,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password
        };
        actions.setSubmitting(true);
        console.log(newUser);
        // axios
        //   .post(registerApi, newUser)
        //   .then(res => {
        //     actions.resetForm();
        //     actions.Submitting(false);
        //   })
        //   .catch(err => {
        //     debugger;
        //   })
        //   .finally(() => {

        //   });

        actions.resetForm();
        actions.setSubmitting(false);
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
          <div className="inputField" style={{ display: showSchool }}>
            <label htmlFor="schoolName">School Name</label>
            <input
              name="schoolName"
              type="text"
              placeholder="Enter your school name"
              id="schoolName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.schoolName}
              className={
                touched.schoolName && errors.schoolName ? "has-error" : null
              }
            />
            <Error touched={touched.schoolName} message={errors.schoolName} />
          </div>
          <div className="inputField" style={{ display: showBuyer }}>
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
          <div className="inputField" style={{ display: showBuyer }}>
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
          <div className="inputField">
            <label htmlFor="email">e-mail</label>
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
          <div className="inputField">
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

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 80%;

  .inputField {
    display: flex;
    flex-direction: column;
    margin: 2px 0;
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
    color: green;
  }

  label {
    font-size: 2rem
    padding: 15px 0 10px 0
  }

  input {
    font-size: 1.5rem
    padding: 10px
    border-radius: 5px
    border: solid 0.5px lightgrey
  }

  button {
    margin-top: 40px
    background-color: green
    color: white
    border: none
    border-radius: 5px
    font-size: 2rem
    padding: 0.6rem 10rem

    &:hover{
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
  }
  }
`;
