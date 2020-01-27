import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";

import { StyledMessageBox } from "./MessagingComponentStyles";

function Reply
(props) {
  const [messageContent, setMessageContent] = useState(null);
  const [messageBody, setMessageBody] = useState("")
  const { id } = props.match.params;

  const changeHandler = e => {
      setMessageBody(e.target.value);
  }

  const submit = () => {
      const testSubmitObject = {
          message: messageBody,
          sender_id: props.loggedInUser._id,
          receiver_id: messageContent.sender_id,
          read: false,
          timestamp: Date.now(),
          subject: `RE: ${messageContent.subject}`
      }
      console.log(testSubmitObject);
  }

  useEffect(() => {
    let thisData = props.messages.received.filter(x => {
      return id == x.id;
    });
    if (thisData.length !== 0) {
        setMessageContent(thisData[0]);
    } else {
      thisData = props.messages.sent.filter(x => {
        return id == x.id;
      });
      setMessageContent(thisData[0]);
    }
  }, [props.messages.received, props.messages.sent]);

  if (!messageContent) {
    return <StyledMessageBox />;
  }
  return (
    <StyledMessageBox>
      <div className="from">
        <h3>To: </h3>
        <h2>{messageContent.name ? messageContent.name : ""}</h2>
      </div>
      <div className="subject">
        <h3>Subject: </h3>
        <h2>RE: {messageContent.subject ? messageContent.subject : ""}</h2>
      </div>
      <div className="message">
          <textarea 
          value={messageBody} 
          autoFocus
          onChange={changeHandler}
          />
      </div>
      <div className="buttons">
        <Link id="back" to='/myaccount/messages'>⬸</Link>
        <button onClick={submit}>Send</button>
      </div>
    </StyledMessageBox>
  );
}

export default connect(state => state, actionCreators)(Reply
  );
