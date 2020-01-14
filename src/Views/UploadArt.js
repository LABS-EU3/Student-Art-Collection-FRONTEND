import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik } from 'formik';


// const BackgroundStyled = styled.div`
// width: 100vw;
// height: 100vh;
// display: flex;
// background-color:red;
// position: absolute;
// z-index:99;
// opacity: 0.5;
// `
const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 20px;
`

const File = styled.input`
width: 900px;
height: 100px;
margin-left: 20px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
resize: none;
margin-bottom: 20px;
`
const Description = styled.input`
width: 900px;
height: 120px;
padding: 12px 20px;
box-sizing: border-box;
resize: none;
margin-left: 20px;
margin-bottom: 20px;
`

const Details = styled.input`
width:450px;
height: 50px;
padding: 12px 20px;
margin-left: 20px;
margin-bottom: 20px;
`

const ArtName = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 20px;
`
const Extras = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`
const Parameters = styled.input`
width: 200px;
height: 40px;
padding: 12px 20px;
margin-left: 20px;
`
const Values = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 20px;
`
const Button = styled.input`
background: #FF9B04;
display: inline-block;
border-radius: 4px;
border: none;
text-align: center;
font-size: 20px;
padding: 10px;
width: 150px;
margin: 5px;

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

function UploadArt() {
 const [title, setTitle] = useState("");
 const [file, setFile] = useState(null);
 const [desc, setDesc] = useState("");

 function uploadWithFormData(){

 }


 return (
    // <BackgroundStyled>
 <div className="UploadArt">
 <Form>
 <label>
 <File type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
 </label>

<ArtName>
 <label>
 <Details type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Title" />
 </label>

 <label>
 <Details type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Artist Name" />
 </label>
 </ArtName>

 <label>
 <Description type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Description" />
 </label>

<Values>
 <label>
 <Parameters type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Width" />
 </label>

 <label>
 <Parameters type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Height" />
 </label>

 <label>
 <Parameters type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Quantity" />
 </label>
 </Values>

<Extras>
 <label>
 <Details type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Materials" />
 </label>

 <label>
 <Details type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Style" />
 </label>

 <label>
 <Details type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Medium" />
 </label>

 <label>
 <Details type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Price" />
 </label>
 </Extras>

 <h1>I agree to the terms and conditions and have all relevant permissions to upload and sell this art <input type="checkbox"></input></h1>

 <Button type="button" value="Upload" onClick={uploadWithFormData} />
 
 </Form>
 </div>
//  </BackgroundStyled>
 );
}

export default UploadArt;