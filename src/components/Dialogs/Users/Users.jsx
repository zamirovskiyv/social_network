import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";


const Users = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/'); // Разбиваем текущий путь на части

        // Фильтруем путь, оставляя только сегменты, не являющиеся числами (предполагая, что userID это числа)
        const filteredPath = pathParts.filter(part => isNaN(parseInt(part)));

        const updatedPath = `${filteredPath.join('/')}/${props.userID}`;
        window.history.replaceState(null, null, updatedPath);
    };
    return (
        // <div className={s.dialog + s.no_hover}>
        <div className={s.dialog}>
            {/*<div className={s.dialog + ' ' + s.no_hover}>*/}
            {/*<NavLink to={`/dialogs/${props.userID}`}>{props.userName}</NavLink>*/}
            {/*<NavLink to={'/dialogs/'+ props.userID}>{props.userName} </NavLink>*/}
            <img className={s.avatar} src={props.avatar} alt={props.userName}/>
            <NavLink to={`/dialogs/${props.userID}`} onClick={handleClick}>
                {props.userName}
            </NavLink>
        </div>
    )
}

export default Users;