import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";
import MessagePreview from "./MessagePreview";

function Inbox(props) {
  return (
    <>
      {props.messages.received.length ? (
        props.messages.received.map(message => {
          return (
            <MessagePreview
              name={message.name}
              subject={message.subject}
              sentAt={message.sentAt}
              read={message.read}
              key={message.id}
              id={message.id}
              type="received"
              data-testId='message'
            />
          );
        })
      ) : (
        <div className="nothing">Nothing here yet!</div>
      )}
    </>
  );
}

export default connect(state => state, actionCreators)(Inbox);
