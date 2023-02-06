import React from 'react'; 
import s from './Post.module.css'


const Post = () => {
    return (
        <div>
            <img className={s.item_img} src="https://best-fly.ru/wp-content/uploads/2020/08/ikonka-malchik.jpg" alt="" />
            <span>Post number</span>
        </div>
    )
}

export default Post;
 
