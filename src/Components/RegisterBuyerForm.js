import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import Error from "../helpers/Error";
import * as Yup from "yup";

const registerApi = "enter url here";

const initalSignupForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

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
    .email("must be a valid email address")
    .max(127, "must be shorter than 127")
    .required("this is a required field"),
  password: Yup.string()
    .min(8, "must be at least 8 charaters")
    .max(127, "must be shorter than 127")
    .required("this is a required field")
});

export function RegisterBuyerForm() {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initalSignupForm}
      onSubmit={(values, actions) => {
        const newUser = {
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
          <div className="inputField">
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
          <div className="inputField">
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
  margin-top: 20px;
  width: 80%

  .inputField {
    margin: 2px 0
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
    color: green;
  }
`;