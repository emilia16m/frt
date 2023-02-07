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

let dialogsData =[
    {id: 1, name: "Olivia"},
    {id: 2, name: "Rosa"},
    {id: 3, name: "Stefany"},
    {id: 4, name: "Laya"},
]
let dialogsItem = dialogsData.map( name_item => <DialogItem name={name_item.name} id={name_item.id}/>)


let messageDate =[
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Im fine"},
]
let messageItem = messageDate.map(item => <Message message={item.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_name}>
                {dialogsItem}
            </div>
            <div className={s.dialog_messages}>
                {messageItem}
            </div>
        </div>
    )
}

export default Dialogs;
