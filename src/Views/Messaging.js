import React from "react";
import {
  StyledContainer,
  StyledNavigationContainer,
  StyledMessageContainer
} from "./MessagingStyling";
import MessagingButton from "../Components/MessagingComponents/MessagingButtons";
import MessagePreview from "../Components/MessagingComponents/MessagePreview";

function Messaging() {
  return (
    <StyledContainer>
      <StyledNavigationContainer>
        <MessagingButton status="inbox">Inbox</MessagingButton>
        <MessagingButton status="sent">Sent</MessagingButton>
      </StyledNavigationContainer>
      <StyledMessageContainer>
        <div className="titles">
          <h2>Sender</h2>
          <h2>Subject</h2>
          <h2>Date</h2>
          <h3></h3>
        </div>
        <MessagePreview />
        <MessagePreview />
        <MessagePreview />
        <MessagePreview />
        <MessagePreview />
      </StyledMessageContainer>
    </StyledContainer>
  );
}

export default Messaging;
