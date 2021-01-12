import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed flex">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://avatars1.githubusercontent.com/u/74429701?s=400&u=b8bcbc0a81ef6366eedd30d7f064a244ed306318&v=4"
                message="EYYY that's working!"
                username="Ricard Solona"
                image="https://images.pexels.com/photos/2422969/pexels-photo-2422969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" profileSrc="https://avatars1.githubusercontent.com/u/74429701?s=400&u=b8bcbc0a81ef6366eedd30d7f064a244ed306318&v=4"
            />
            <Post 
                 profilePic="https://avatars1.githubusercontent.com/u/74429701?s=400&u=b8bcbc0a81ef6366eedd30d7f064a244ed306318&v=4"
                 message="EYYY that's working!"
                 username="Ricard Solona"
                 image=""
            />
            <Post />
        </div>
    )
}

export default Feed
