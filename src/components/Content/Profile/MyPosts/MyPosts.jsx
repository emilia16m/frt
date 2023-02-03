import React from 'react'; 
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = () => {
    return(
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post />
        </div>
    )
}


export default MyPost;
