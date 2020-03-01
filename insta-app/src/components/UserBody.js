import React from 'react';
import '../styles/styles.css';
import {Link} from "react-router-dom";

const UserBody = (props) => {
    const buildPosts = () => {
        const postsView = [];
        for(let key in props.posts) {
            postsView.push(
                <Link key={key} to={`/post/${key}`}>
                    <img key={key} src={`/${props.posts[key].img}`} className="each_post" alt="post"/>
                </Link>
            );
        }
        return postsView;
    };

    return (
        <section>
            <div className="bio">{props.user.bio}</div>
            <div className="posts">
                {buildPosts()}
            </div>
        </section>
    );
};

export default UserBody;