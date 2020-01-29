import React from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AppSpinner() {
  return (
    <StyledSpinnerContainer>
      <Spinner />
    </StyledSpinnerContainer>
  );
}

export default AppSpinner;
