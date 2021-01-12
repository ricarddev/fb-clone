import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post-top flex">
                <Avatar src={profilePic} className="post-avatar" />
                <div className="post-topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt={image}/>
            </div>
            <div className="post-options flex s-ev">
                <div className="post-option flex">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post-option flex">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post-option flex">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post-option flex">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
