import React from 'react'; 
import Post from './Post/Post';
import s from './MyPosts.module.css'
const MyPosts = () => {
    return(
        <div className={s.posts_wrapper}>
            <span>My post</span>
            <div className={s.add_post}>
                <textarea></textarea>
                <button className={s.button_post}>Add post</button>
            </div>
            <Post />
        </div>
    )
}


export default MyPosts;
