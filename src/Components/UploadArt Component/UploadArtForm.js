import React from 'react';
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
} from './UploadArtFormStyle';

function UploadArtForm(props) {
    return (
        <StyledForm >
            <Title>
                <StyledError name='name' component='div' />
                <StyledName name='name' type='text' placeholder={`Name (required)`} />
                <StyledError name='artistName' component='div' />
                <StyledName name='artistName' type='text' placeholder='Artist Name (required)' />
            </Title>

            <Dimensions>
                <StyledError name='description' component='div' />
                <StyledDesc name='description' type='text' placeholder='Description (required)' />
                <StyledError name='width' component='div' />
                <StyledDimension name='width' type='text' placeholder='Width in cm (required)' />
                <StyledError name='height' component='div' />
                <StyledDimension name='height' type='text' placeholder='Height in cm (required)' />
                <StyledError name='quantity' component='div' />
                <StyledDimension name='quantity' type='text' placeholder='Quantity (required)' />
            </Dimensions>

            <Details>
                <StyledError name='price' component='div' />
                <StyledDetails style={{backgroundColor: 'rgba(238, 243, 248, 0.5)', border: 'none'}}name='price' type='text' placeholder='Price in $ (required)' />
                <StyledError name='category' component='div' />
                <StyledDetails name='category' type='text' placeholder='Category' />
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

            <Button type="submit">Upload Art</Button>
        </StyledForm >
    )
};

export default UploadArtForm;
