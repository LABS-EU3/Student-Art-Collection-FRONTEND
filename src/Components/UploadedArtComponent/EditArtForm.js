import React  from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledForm, 
    StyledError, 
    StyledName, 
    StyledDesc, 
    StyledDimension, 
    StyledDetails, 
    Button, 
    Title, 
    Dimensions, 
    Details } from './EditFormStyle';

function EditArtForm (props) {
    return(
        <>
        <StyledForm >
            <Title>
                <StyledError name='name' component='div' />
                <StyledName name='name' type='text' placeholder='Name' />
                <StyledError name='artistName' component='div' />
                <StyledName name='artistName' type='text' placeholder='Artist Name' />
            </Title>

        <Dimensions>
            <StyledError name='description' component='div' />
            <StyledDesc name='description' type='text' placeholder='Description' />
            <StyledError name='width' component='div' />
            <StyledDimension name='width' type='text' placeholder='Width in CM' />
            <StyledError name='height' component='div' />
            <StyledDimension name='height' type='text' placeholder='Height in CM' />
            <StyledError name='quantity' component='div' />
            <StyledDimension name='quantity' type='text' placeholder='Quantity' />
        </Dimensions>

        <Details>
            <StyledError name='category' component='div' />
            <StyledDetails name='category' type='text' placeholder='Category' />
            <StyledError name='price' component='div' />
            <StyledDetails name='price' type='text' placeholder='Price in $' />
            <StyledError name='medium' component='div' />
            <StyledDetails name='medium' type='text' placeholder='Medium' />
            <StyledError name='subject' component='div' />
            <StyledDetails name='subject' type='text' placeholder='Subject' />
            <StyledError name='material' component='div' />
            <StyledDetails name='material' type='text' placeholder='Material' />
            <StyledError name='style' component='div' />
            <StyledDetails name='style' type='text' placeholder='Style' />
        </Details>

        <h1>I agree to the terms and conditions and I have all relevant permissions to upload and sell this artwork <input type="checkbox" id="agree" value="check" /> </h1> 

        <Button type="submit">Edit Art</Button>
        </StyledForm >
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
    )
};


export default EditArtForm;