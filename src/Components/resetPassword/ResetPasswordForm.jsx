import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const registerApi = process.env.URL || "http://localhost:4000/resetpassword";

const ResetPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      axios
        .post(registerApi, values)
        .then(response => {
          console.log(response);
          resetForm();
        })
        .catch(error => console.log(error));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResetPasswordForm;
