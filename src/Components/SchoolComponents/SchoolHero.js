import React from "react";
import styled from "styled-components";
import HeroImage from "../../Assets/hero.jpg";

export default function SchoolHero() {
  return (
    <StyledHero>
      <h1>Browse Our Schools</h1>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  width: 100%;
  height: 40vh;
  background: url(${HeroImage});
  background-size: cover;
  background-position: 0 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  font-family: "Roboto", sans-serif;

  @media (max-width: 500px) {
    height: 110px
  }


  h1 {
    font-size: 5rem;
    font-weight: 550;
    letter-spacing: 0.2rem;

    @media (max-width: 750px) {
      font-size: 3.5rem;
    }
    @media (max-width: 500px) {
      width: 80%;
      font-size: 3rem;
      text-align: center;
    }
  }
`;
