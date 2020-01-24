import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMessagePreview } from './MessagingComponentStyles';

function MessagePreview(props) {
    return (
        <StyledMessagePreview style={props.read ? null : {backgroundColor: 'rgba(34, 56, 76, 0.03)'}}>
            <h2>{props.name}</h2>
            <Link to={`/myaccount/${props.type}/${props.id}`}>{props.subject}</Link>
            <h3>{props.sentAt}</h3>
            <button>Delete</button>
        </StyledMessagePreview>
    )
}

export default MessagePreview;