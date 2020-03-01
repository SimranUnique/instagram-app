import React from 'react';

const Post = (props) => (
    <div className="post_container">
        <div className="big_post">
            <img className="post_img" alt="post" src={`/${props.post.img}`}/>
            <div className="clearfix">
                <img className="like_icon" src="/like.png" alt="Like" onClick={props.likeClickHandler}/>
                <p className="post_desc">{props.post.description}</p>
            </div>
        </div>
    </div>
);

export default Post;