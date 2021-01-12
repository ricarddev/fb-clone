import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // some staff with db 

        setInput("");
        setImageUrl("");
    } 

    return (
        <div className="messageSender">
            <div className="messageSender-top flex">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder={`What's on your mind, Ricard Solsona`} 
                        className="messageSender-input" 
                        type="text"
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image URL (Optional)" 
                        type="text"
                    />
                    <button onClick={handleSubmit} type="submit"></button>
                </form>
            </div>
            <div className="messageSender-bottom flex s-ev">
                <div className="messageSender-option flex">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender-option flex">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender-option flex">
                    <InsertEmoticonOutlinedIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
