import React from "react";
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={props.type ? s.inMessage : s.outMessage}>{props.userMessage}</div>
    )
}

export default Messages;