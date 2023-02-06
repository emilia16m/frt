import React from 'react'; 
import Post from './Post/Post';

const MyPosts = () => {
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


export default MyPosts;
