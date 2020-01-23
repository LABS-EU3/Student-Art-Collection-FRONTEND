import React from "react";
import queryString from "query-string";
import {
  StyledContainer,
  StyledNavigationContainer,
  StyledMessageContainer
} from "./MessagingStyling";
import MessagingButton from "../Components/MessagingComponents/MessagingButtons";
import MessagePreview from "../Components/MessagingComponents/MessagePreview";

import { DummyData } from "../Components/MessagingComponents/DummyMessages";

function Messaging(props) {
  const { status } = queryString.parse(props.location.search);

  const sendOrReceive = status === 'inbox' ? 'Sender' : "Recipient";

  return (
    <StyledContainer>
      <StyledNavigationContainer>
        <MessagingButton status="inbox">Inbox</MessagingButton>
        <MessagingButton status="sent">Sent</MessagingButton>
      </StyledNavigationContainer>
      <StyledMessageContainer>
        <div className="titles">
          <h2>{sendOrReceive}</h2>
          <h2>Subject</h2>
          <h2>Date</h2>
          <h3></h3>
        </div>
        {DummyData.map(message => {
          return (
            <MessagePreview
              name={message.sender_name}
              subject={message.subject}
              sentAt={message.sentAt}
              key={message.id}
            />
          );
        })}
      </StyledMessageContainer>
    </StyledContainer>
  );
}

export default Messaging;
