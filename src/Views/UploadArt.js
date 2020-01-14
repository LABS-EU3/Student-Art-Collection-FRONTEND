import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Formik, Field } from 'formik';


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

// const File = styled.input`
// width: 900px;
// height: 100px;
// margin-left: 20px;
// padding: 12px 20px;
// box-sizing: border-box;
// border: 2px solid #ccc;
// border-radius: 4px;
// background-color: #f8f8f8;
// resize: none;
// margin-bottom: 20px;
// `
// const Description = styled.input`
// width: 900px;
// height: 120px;
// padding: 12px 20px;
// box-sizing: border-box;
// resize: none;
// margin-left: 20px;
// margin-bottom: 20px;
// `

// const Details = styled.input`
// width:450px;
// height: 50px;
// padding: 12px 20px;
// margin-left: 20px;
// margin-bottom: 20px;
// `

// const ArtName = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// margin-bottom: 20px;
// `
// const Extras = styled.div`
// display:flex;
// flex-direction: row;
// justify-content: space-between;
// flex-wrap: wrap;
// `
// const Parameters = styled.input`
// width: 200px;
// height: 40px;
// padding: 12px 20px;
// margin-left: 20px;
// `
// const Values = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// margin-bottom: 20px;
// `
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
 const [width, setWidth] = useState("");
 const [height, setHeight] = useState("");
 const [quantity, setQuantity] = useState("");
 const [materials, setMaterials] = useState("");
 const [style, setStyle] = useState("");
 const [medium, setMedium] = useState("");
 const [price, setPrice] = useState("");

 function uploadWithFormData(){

 }


 return (

    <Formik>
 <div className="UploadArt">
 <Form>
 <label>
 <Field type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
 </label>

 <label>
 <Field type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Title" />
 </label>

 <label>
 <Field type="text" vaue={title} 
 onChange={(e) => { setTitle(e.target.value )}} 
 placeholder="Artist Name" />
 </label>

 <label>
 <Field type="text" vaue={desc} 
 onChange={(e) => { setDesc(e.target.value )}} 
 placeholder="Description" />
 </label>

 <label>
 <Field type="text" vaue={width} 
 onChange={(e) => { setWidth(e.target.value )}} 
 placeholder="Width" />
 </label>

 <label>
 <Field type="text" vaue={height} 
 onChange={(e) => { setHeight(e.target.value )}} 
 placeholder="Height" />
 </label>

 <label>
 <Field type="text" vaue={quantity} 
 onChange={(e) => { setQuantity(e.target.value )}} 
 placeholder="Quantity" />
 </label>

 <label>
 <Field type="text" vaue={materials} 
 onChange={(e) => { setMaterials(e.target.value )}} 
 placeholder="Materials" />
 </label>

 <label>
 <Field type="text" vaue={style} 
 onChange={(e) => { setStyle(e.target.value )}} 
 placeholder="Style" />
 </label>

 <label>
 <Field type="text" vaue={medium} 
 onChange={(e) => { setMedium(e.target.value )}} 
 placeholder="Medium" />
 </label>

 <label>
 <Field type="text" vaue={price} 
 onChange={(e) => { setPrice(e.target.value )}} 
 placeholder="Price" />
 </label>

 <h1>I agree to the terms and conditions and have all relevant permissions to upload and sell this art <input type="checkbox"></input></h1>

 <Button type="button" value="Upload" onClick={uploadWithFormData} />
 
 </Form>
 </div>
 </Formik>
 );
}

export default UploadArt;