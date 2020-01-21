import React from 'react';
import { Formik} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {axiosWithBase} from '../AxiosCustom';
import {
  StyledForm,
  StyledError,
  StyledName,
  StyledDesc,
  StyledDimension,
  StyledDetails,
  Button,
  Title,
  Details
} from './UploadArt Component/UploadArtFormStyle';


const Test = ({editArt, onRequestClose}) => {
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
        .then(() =>{
          onRequestClose()
          toast.success('product updated succesfully')
        })
        .catch(() =>{
          toast.error("cannot update Item")
        })
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
        <StyledError name="name" component="div" />
        <label> Name:
        <StyledName name="name" type="text" placeholder="name" /> 
        </label>
        <StyledError name="artistName" component="div" />
        <label> Artist Name:
        <StyledName name="artistName" type="text" placeholder="artistName" /> 
        </label>
      </Title>
      <Details>
        <StyledError name="description" component="div" />
        <label> Description:
        <StyledDesc name="description" type="text" placeholder="description" />
        
        </label>
        <StyledError name="width" component="div" />
        <label> Width:
        <StyledDimension name="width" type="text" placeholder="width" />  
        </label>
        <StyledError name="height" component="div" />
        <label> Height:
        <StyledDimension name="height" type="text" placeholder="height" />
        
        </label>
        <StyledError name="quantity" component="div" />
        <label> Quantity:
        <StyledDimension name="quantity" type="text" placeholder="quantity" />  
        </label>
        <StyledError name="category" component="div" />
        <label> Category:
        <StyledDetails name="category" type="text" placeholder="category" />
        </label>
        <StyledError name="price" component="div" />
        <label> Price:
        <StyledDetails name="price" type="text" placeholder="price" />
        </label>
        <StyledError name="medium" component="div" />
        <label> Medium:
        <StyledDetails name="medium" type="text" placeholder="medium" />
        
        </label>
        <StyledError name="subject" component="div" />
        <label> Subject:
        <StyledDetails name="subject" type="text" placeholder="subject" />
        
        </label>
        <StyledError name="materials" component="div" />
        <label> Materials:
        <StyledDetails name="materials" type="text" placeholder="materials" />
        </label>
        <StyledError name="style" component="div" />
        <label> Style:
          <StyledDetails name="style" type="text" placeholder="style" />
        </label>
      </Details>
      <h1>
        I agree to the terms and conditions and I have all relevant permissions
        to upload and sell this artwork{' '}
        <input type="checkbox" id="agree" value="check" />{' '}
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
                'font-size': '1.5rem',
                width: '400px',
                'text-align': 'center'
              }}
            />
        </>
  );
};

export default Test;
