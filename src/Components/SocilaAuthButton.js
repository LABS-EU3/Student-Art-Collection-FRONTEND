import React from "react";
import styled from "styled-components";
import "./SocialAuthButton.css";
import GoogleIcon from "../Assets/btn_google_signin_dark_normal_web@2x.png";

export default function SocialAuthButton(props) {
  const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  margin-top: 10px;
  div {

    width: 200px;

    img {
      max-height: auto
      max-width: 100%
    }

    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-in-out;
    }
  }
  `;

  return (
    <Button>
      <div>
        <a href={props.url}>
          <img src={GoogleIcon} alt="" />
        </a>
      </div>
    </Button>
  );
}
