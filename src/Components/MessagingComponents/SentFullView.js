import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";

import { StyledMessageBox } from "./MessagingComponentStyles";

function SentFullView (props) {
  const [messageContent, setMessageContent] = useState(null);
  const { id } = props.match.params;

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
        <h2>{messageContent.subject ? messageContent.subject : ""}</h2>
      </div>
      <div className="message">
        <p>{messageContent.message ? messageContent.message : ""}</p>
      </div>
      <div className="buttons">
        <Link id="back" to='/myaccount/messages'>⬸</Link>
      </div>
    </StyledMessageBox>
  );
}

export default connect(state => state, actionCreators)(SentFullView
  );
