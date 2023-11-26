import React, {useState} from "react";
import s from './AddNewMessages.module.css';

const AddNewMessages = (props) => {
    const [inputText, setInputText] = useState(String);


    const handleInputChange = (event) => {
        const typeMessage =  event.target.value
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newMessageText: typeMessage})
        setInputText(typeMessage); // Обновляем состояние при изменении текста в input
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.dispatch({type: 'ADD-NEW-MESSAGE'})
        console.log("=== Введенный текст:", inputText);
        setInputText('');
    };

    return (
        <form className={s.newMessage} onSubmit={handleFormSubmit}>
            <input className={s.newMessageText}
                   type="text"
                   value={inputText}
                   onChange={handleInputChange}
                   />
            <button className={s.button}>Send</button>
        </form>

    )
}

export default AddNewMessages;