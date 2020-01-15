import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import UploadArtForm  from '../Components/UploadArt Component/UploadArtForm';
import * as yup from 'yup';
import { axiosWithBase } from '../AxiosCustom';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../Components/Spinner';
import { StyledSpinner } from './UploadArtStyle';
import {connect} from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators'


const initialValues = {
   name: "Brenda",
   artistName: "Joshua",
   description: "artist",
   width: 10,
   height: 10,
   quantity: 20,
   materials: "",
   style: "",
   medium: "",
   subject: "",
   price: 20,
   category: "",
}

const validationSchema = yup.object().shape({
   name: yup
       .string()
       .required(),
   artistName: yup
       .string()
       .required(),
   description: yup
       .string()
       .required(),
   width: yup
       .number()
       .required(),
   height: yup
       .number()
       .required(),
   materials: yup
       .string(),
   style: yup
       .string(),
   medium: yup
       .string(),
   subject: yup
       .string(),
   price: yup
       .number()
       .required(),
   category: yup
       .string(),
   quantity: yup
       .number()
});

function UploadArt({ loggedInUser }) {
   const [submitted, setSubmitted] = useState(false);
   const [spinning, setSpinning] = useState(false);
   const [artPic, setArtPic] = useState(null);

   const uploadArtPic = (e) => {
      setArtPic(e.target.files[0]);
   }

   const submitArt = (values, actions) => {
      const formData = new FormData();
      formData.append('image', artPic);
      formData.append('name', values.name);
      formData.append('artistName', values.artistName);
      formData.append('medium', values.medium);
      formData.append('subject', values.subject);
      formData.append('height', values.height);
      formData.append('width', values.width);
      formData.append('style', values.style);
      formData.append('category', values.category);
      formData.append('materials', values.materials);
      formData.append('quantity', values.quantity);
      formData.append('price', values.price);
      formData.append('description', values.description);

      setSpinning(true);

      axiosWithBase()
          .post(`/art/upload/${loggedInUser._id}`, formData)
          .then(data => {
              actions.resetForm();
              setSpinning(false);
              setSubmitted(true);
          })
          .catch((error) => {
             console.log(error.response)
            setSpinning(false);
              toast.error("Error uploading art.")
          })
  };

 return (
<div className="upload container">
   {spinning ? <StyledSpinner><Spinner /></StyledSpinner>
       :
       <>
       {!submitted ?
   <form>
      <div>
      <input type="file" onChange={uploadArtPic} />
   </div>
    <Formik 
    initialValues = {initialValues}
    validationSchema={validationSchema}
    onSubmit = {submitArt}
    component = {UploadArtForm}
    />
    </form> 
    : <h1>Art uploaded</h1>
}
    <ToastContainer
    position="center"
    bodyClassName="toast"
    autoClose={3000}
    closeButton={false}
/>
</>
}
</div>
   
 )
}

export default connect(state => state,actionCreators)(UploadArt)