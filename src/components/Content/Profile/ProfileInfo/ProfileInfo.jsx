import React from 'react'; 
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
    <div>
        <img className={s.item_img} src='https://w-dog.ru/wallpapers/9/16/491653649666048/xolmy-polya-pomestya-pejzazh-toskana.jpg'></img>
        <div>ava + descr</div>
    </div>
    )
}

export default ProfileInfo;
