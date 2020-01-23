import React from "react";
import { StyledContainer, StyledNavigationContainer } from "./MessagingStyling";
import MessagingButton from "../Components/MessagingComponents/MessagingButtons";

function Messaging() {
  return (
    <StyledContainer>
      <StyledNavigationContainer>
        <MessagingButton status="inbox">Inbox</MessagingButton>
        <MessagingButton status="sent">Sent</MessagingButton>
      </StyledNavigationContainer>
    </StyledContainer>
  );
}

export default Messaging;
