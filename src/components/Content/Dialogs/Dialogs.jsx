import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { addMessage } from '../../../redux/state';
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


const Dialogs = (props) => {
    let messageItem = props.message.map(item => <Message message={item.message}/>)
    let dialogs = props.dialogs.map( name_item => <DialogItem name={name_item.name} id={name_item.id}/>)

    let newMessage = createRef();   
    let sendMessage =() => {
        const Message = newMessage.current.value;
        props.addMessage(Message)
        newMessage.current.value = " " 
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_name}>
                {dialogs}
            </div>
             <div className={s.dialog_messages}>
                 {messageItem} 
                 <div className={s.sendMessage}>
                    <textarea className={s.text} ref={newMessage}></textarea>
                    <button className={s.button} onClick={sendMessage}> send </button>
                 </div>
            </div>
        </div>
    )
}

export default Dialogs;
