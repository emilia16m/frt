import React from 'react'; 
import MyPost from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return <div className={s.content}>
    <ProfileInfo />
    <MyPost />
  </div>
}

export default Profile;
