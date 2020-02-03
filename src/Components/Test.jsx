import React from "react";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosWithBase } from "../AxiosCustom";
import {
  StyledForm,
  StyledError,
  StyledInput,
  Button,
  Title
} from "./UploadedArtComponent/EditFormStyle";

const Test = ({ editArt, onRequestClose }) => {
  const initialValues = {
    name: editArt.name,
    artistName: editArt.artistName,
    description: editArt.description,
    width: editArt.width,
    height: editArt.height,
    quantity: editArt.quantity,
    category: editArt.category,
    price: editArt.price,
    medium: editArt.medium,
    subject: editArt.subject,
    materials: editArt.materials,
    style: editArt.style
  };
  const submitHandle = values => {
    axiosWithBase()
      .put(`/art/edit/${editArt._id}`, values)
      .then(() => {
        onRequestClose();
        toast.success("product updated succesfully");
      })
      .catch(() => {
        toast.error("cannot update Item");
      });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandle}
        component={TestForm}
      />
    </div>
  );
};

const TestForm = () => {
  return (
    <>
      <StyledForm>
        <Title>
          <div className="fieldName">
            <h3>Name: </h3>
            <StyledInput name="name" type="text" placeholder="name" />
          </div>
          <div className="fieldName">
            <h3>Artist Name: </h3>
            <StyledInput
              name="artistName"
              type="text"
              placeholder="artistName"
            />
          </div>
        </Title>
        <Title>
          <div className="fieldName">
            <h3>Description: </h3>
            <StyledInput
              name="description"
              type="text"
              placeholder="description"
            />
          </div>
          <div className="fieldName">
            <h3> Quantity: </h3>
            <StyledInput name="quantity" type="text" placeholder="quantity" />
          </div>
        </Title>
        <Title>
          <div className="fieldName">
            <h3>Width: </h3>
            <StyledInput name="width" type="text" placeholder="width" />
          </div>
          <div className="fieldName">
            <h3> Height: </h3>
            <StyledInput name="height" type="text" placeholder="height" />
          </div>
        </Title>
        <Title>
          <div className="fieldName">
            <h3>Price:</h3>
            <StyledInput name="price" type="text" placeholder="price" />
          </div>
          <div className="fieldName">
            <h3> Category:</h3>
            <StyledInput
              style={{ backgroundColor: "rgba(238, 243, 248, 0.3)" }}
              name="category"
              type="text"
              placeholder="category"
            />
          </div>
        </Title>
        <Title>
          <div className="fieldName">
            <h3> Medium:</h3>
            <StyledInput
              style={{ backgroundColor: "rgba(238, 243, 248, 0.3)" }}
              name="medium"
              type="text"
              placeholder="medium"
            />
          </div>

          <div className="fieldName">
            <h3>Subject:</h3>
            <StyledInput
              style={{ backgroundColor: "rgba(238, 243, 248, 0.3)" }}
              name="subject"
              type="text"
              placeholder="subject"
            />
          </div>
        </Title>
        <Title>
          <div className="fieldName">
            <h3>Materials:</h3>
            <StyledInput name="materials" type="text" placeholder="materials" />
          </div>
          <div className="fieldName">
            <h3>Style:</h3>
            <StyledInput
              style={{ backgroundColor: "rgba(238, 243, 248, 0.3)" }}
              name="style"
              type="text"
              placeholder="style"
            />
          </div>
        </Title>
        <div className="errors">
          <StyledError name="name" component="div" />
          <StyledError name="artistName" component="div" />
          <StyledError name="description" component="div" />
          <StyledError name="width" component="div" />
          <StyledError name="height" component="div" />
          <StyledError name="quantity" component="div" />
          <StyledError name="price" component="div" />
        </div>
        <h1>
          I agree to the terms and conditions and I have all relevant
          permissions to upload and sell this artwork{" "}
          <input type="checkbox" id="agree" value="check" />{" "}
        </h1>
        <Button type="submit">Submit</Button>
      </StyledForm>
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
    </>
  );
};

export default Test;
