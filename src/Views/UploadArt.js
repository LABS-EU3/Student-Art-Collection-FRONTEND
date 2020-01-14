import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik, Field } from 'formik';
import UploadArtForm  from '../Components/UploadArt Component/UploadArtForm';


const initialValues = {
   name: "",
   description: "",
   width: "",
   height: "",
   quantity: "",
   materials: "",
   style: "",
   medium: "",
   subject: "",
   price: "",
   category: ""
}

function UploadArt() {
//  const [title, setTitle] = useState("");
//  const [file, setFile] = useState(null);
//  const [desc, setDesc] = useState("");
//  const [width, setWidth] = useState("");
//  const [height, setHeight] = useState("");
//  const [quantity, setQuantity] = useState("");
//  const [materials, setMaterials] = useState("");
//  const [style, setStyle] = useState("");
//  const [medium, setMedium] = useState("");
//  const [price, setPrice] = useState("");

const submitArt = values => {
   debugger
}

 return (

    <Formik 
    initialValues = {initialValues}
    onSubmit = {submitArt}
    component = {UploadArtForm}
    />
 )
}

export default UploadArt;