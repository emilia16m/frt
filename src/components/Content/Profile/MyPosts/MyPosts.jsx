import React from 'react'; 
import Post from './Post/Post';
import s from './MyPosts.module.css'




const MyPosts = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
        const text = newPostElement.current.value;
        alert(text)
    }

    return(
        <div className={s.posts_wrapper}>
            <span>My post</span>
            <div className={s.add_post}>
                <textarea ref={newPostElement}></textarea>
                <button className={s.button_post} onClick={ addPost } > Add post </button>
            </div>
            <Post />
        </div>
    )
}


export default MyPosts;
