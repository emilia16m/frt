import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.name_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return <div className={s.messages_item}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_name}>
                <DialogItem name ="Alex" id="1"/>
                <DialogItem name ="Olivia" id="2"/>
                <DialogItem name ="Stefan" id="3"/>
                <DialogItem name ="Demon" id="4"/>
            </div>
            <div className={s.dialog_messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Im fine"/>
            </div>
        </div>
    )
}

export default Dialogs;
