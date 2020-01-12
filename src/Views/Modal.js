import React, {useState} from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const BackgroundStyled = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color:red;
position: absolute;
z-index:99;
opacity: 0.5;
`

const API_BASE = "http://localhost:4000"

function submitForm(contentType, data, setResponse) {
 axios({
 url: `${API_BASE}/upload/:id`,
 method: 'POST',
 data: data,
 headers: {
 'Content-Type': contentType
 }
 }).then((response) => {
 setResponse(response.data);
 }).catch((error) => {
 setResponse("error");
 })
}

function Modal() {
 const [title, setTitle] = useState("");
 const [file, setFile] = useState(null);
 const [desc, setDesc] = useState("");

 function uploadWithFormData(){

 }


 return (
    <BackgroundStyled>
 <div className="App">
 <h2>Upload Form</h2>
 <form>
 <label>
 File
 <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Title" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Artist Name" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Description" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Width" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Height" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Quantity" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Materials" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Style" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Medium" />
 </label>

 <label>
 <input type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Price" />
 </label>

 <input type="button" value="Upload" onClick={uploadWithFormData} />
 
 </form>
 </div>
 </BackgroundStyled>
 );
}

export default Modal;