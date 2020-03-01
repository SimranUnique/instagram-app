import React from 'react';
import '../styles/styles.css';

const UserHeader = (props) => (
    <div className="clearfix">
        <img src={`/${props.user.profilePic}`} alt="U" className="profile_pic"/>
        <p className="user_name">{props.user.name}</p>
    </div>
);

export default UserHeader;