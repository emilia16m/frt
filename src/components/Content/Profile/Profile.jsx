import React from 'react'; 
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css'
const Profile = () => {
    return <div className={s.content}>
    <div>
    <img className={s.item_img} src='https://i.pinimg.com/originals/19/9d/ba/199dba849c0e4fcd18bf8d98374f6858.jpg'></img>
    </div>
    <div>ava + descr</div>
    <MyPost />
  </div>
}

export default Profile;
