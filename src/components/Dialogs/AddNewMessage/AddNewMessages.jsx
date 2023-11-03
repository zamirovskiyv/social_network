import React from "react";
import s from './AddNewMessages.module.css';


const AddNewMessages = (props) => {
    return (
        <div className={s.newMessage}>
            <textarea className={s.newMessageText}></textarea>
            <button className={s.button}>Send</button>
        </div>

    )
}

export default AddNewMessages;