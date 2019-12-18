import * as Yup from "yup";

export const validationSchemaSchool = Yup.object().shape({
  schoolName: Yup.string()
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
    .required("this is a required field"),
});

export const validationSchemaBuyer = Yup.object().shape({
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
    .required("this is a required field"),
});
