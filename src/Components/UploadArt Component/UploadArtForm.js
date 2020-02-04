import React from "react";
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
} from "./UploadArtFormStyle";

function UploadArtForm(props) {
  return (
    <StyledForm>
      <Title>
        <StyledName name="name" type="text" placeholder={`Name (required)`} />
        <StyledName
          name="artistName"
          type="text"
          placeholder="Artist Name (required)"
        />
      </Title>

      <Dimensions>
        <StyledDesc
          name="description"
          type="text"
          placeholder="Description (required)"
        />
        <StyledDimension
          name="width"
          type="text"
          placeholder="Width in cm (required)"
        />
        <StyledDimension
          name="height"
          type="text"
          placeholder="Height in cm (required)"
        />
        <StyledDimension
          name="quantity"
          type="text"
          placeholder="Quantity (required)"
        />
      </Dimensions>

      <Details>
        <StyledDetails
          style={{
            backgroundColor: "rgba(238, 243, 248, 0.5)",
            border: "none"
          }}
          name="price"
          type="text"
          placeholder="Price in $ (required)"
        />
        <StyledDetails name="category" type="text" placeholder="Category" />
        <StyledDetails name="medium" type="text" placeholder="Medium" />
        <StyledDetails name="subject" type="text" placeholder="Subject" />
        <StyledDetails name="material" type="text" placeholder="Material" />
        <StyledDetails name="style" type="text" placeholder="Style" />
      </Details>
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
        I agree to the terms and conditions and I have all relevant permissions
        to upload and sell this artwork{" "}
        <input type="checkbox" id="agree" value="check" />{" "}
      </h1>

      <Button type="submit">Upload Art</Button>
    </StyledForm>
  );
}

export default UploadArtForm;
