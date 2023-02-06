import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_name}>
                <div className={s.name_item}>Alex</div>
                <div className={s.name_item}>Selena</div>
                <div className={s.name_item}>Justin</div>
                <div className={s.name_item}>Olivia</div>
            </div>
            <div className={s.dialog_messages}>
                <div className={s.messages_item}>Hi</div>
                <div className={s.messages_item}>How are you</div>
                <div className={s.messages_item}>Im fine</div>
            </div>
        </div>
    )
}

export default Dialogs;
