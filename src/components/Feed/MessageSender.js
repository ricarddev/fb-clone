import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

function MessageSender() {

    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input !== "") {
            db.collection('posts').add({  
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl,
            });
            
            setInput("");
            setImageUrl("");
        }else {
            alert("You need to write something to send it")
        }
    } 

    return (
        <div className="messageSender">
            <div className="messageSender-top flex">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder={`What's on your mind, ${user.displayName}`} 
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
