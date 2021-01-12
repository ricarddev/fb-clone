import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './Firebase';
import './Login.css';

function Login() {
    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then((result) => {console.log(result);} )
        .catch((error) => { alert(error.message)})
    }
    return (
        <div className="login flex s-ar">
            <div className="login-logo flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt=""/>
                <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Facebook-Logo.png" alt=""/>
            </div>
            <Button onClick={signIn} type="submit">Sign In</Button>
        </div>
    )
}

export default Login;
