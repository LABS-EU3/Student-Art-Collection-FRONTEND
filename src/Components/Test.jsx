import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  StyledForm,
  StyledError,
  StyledName,
  StyledDesc,
  StyledDimension,
  StyledDetails,
  Button,
  Title,
  Dimensions,
  Details
} from './UploadArt Component/UploadArtFormStyle';

const initialValues = {
  name: '',
  artistName: '',
  description: '',
  width: '',
  height: '',
  quantity: '',
  category: '',
  price: '',
  medium: '',
  subject: '',
  materials: '',
  style: ''
};

const Test = () => {
  const submitHandle = values => {
    debugger;
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

const TestForm = props => {
  debugger;
  return (
    <StyledForm>
      <Title>
        <StyledError name="name" component="div" />
        <StyledName name="name" type="text" placeholder="name" />
        <StyledError name="artistName" component="div" />
        <StyledName name="artistName" type="text" placeholder="artistName" />
      </Title>
      <Details>
        <StyledError name="description" component="div" />
        <StyledDesc name="description" type="text" placeholder="description" />
        <StyledError name="width" component="div" />
        <StyledDimension name="width" type="text" placeholder="width" />
        <StyledError name="height" component="div" />
        <StyledDimension name="height" type="text" placeholder="height" />
        <StyledError name="quantity" component="div" />
        <StyledDimension name="quantity" type="text" placeholder="quantity" />
        <StyledError name="category" component="div" />
        <StyledDetails name="category" type="text" placeholder="category" />
        <StyledError name="price" component="div" />
        <StyledDetails name="price" type="text" placeholder="price" />
        <StyledError name="medium" component="div" />
        <StyledDetails name="medium" type="text" placeholder="medium" />
        <StyledError name="subject" component="div" />
        <StyledDetails name="subject" type="text" placeholder="subject" />
        <StyledError name="materials" component="div" />
        <StyledDetails name="materials" type="text" placeholder="materials" />
        <StyledError name="style" component="div" />
        <StyledDetails name="style" type="text" placeholder="style" />
      </Details>
      <h1>
        I agree to the terms and conditions and I have all relevant permissions
        to upload and sell this artwork{' '}
        <input type="checkbox" id="agree" value="check" />{' '}
      </h1>
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};

export default Test;
