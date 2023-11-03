import React from "react";
import s from './Dialogs.module.css';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import AddNewMessages from "./AddNewMessage/AddNewMessages";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.postName.map(n => <Users userName={n.name} userID={n.id} avatar={n.avatar}/>)}
            </div>
            <div className={s.messages}>
                {props.postMessages.map(m => <Messages userMessage={m.message} type={m.type}/>)}
                <AddNewMessages/>
            </div>


        </div>
    )
}

export default Dialogs;