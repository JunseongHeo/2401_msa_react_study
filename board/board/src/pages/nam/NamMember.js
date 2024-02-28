import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NamLogin.css';
import {Link} from "react-router-dom";

const onClickSignUp = async({body}) => {
    const headers = {
        'Content-Type' : 'application/json'
    }

    if (body.loginId === '' || body.userPw === '') {
        alert("Input your ID and Password!");
        return;
    }

    await axios.post('/membernam/create',body,{headers:headers})
        .then((response) => {
            console.log(`status : ${response.status}`);

            if (response.status === 200) {
                alert("You have been registered! Welcome to Board Nam!");
                window.location.href = "/nam/login_nam";
            }
        }).catch((error) => {
            console.log(`error : ${error}`);
        });
}

const onClickSignCheck = async (loginId,setSignUpCk) => {
    await axios.get(`/membernam/read/${loginId}`).then((response) => {
        if (response.data !== null) {
            alert("You cannot use this ID!  :^(  ");
        } else {
            setSignUpCk(false);
            alert("You can use this ID!  :^D  ");
        }
    }).catch((error) => {
        console.log(`error : ${error}`);
    });
}

function NamMember() {
    const [loginId, setLoginId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [signUpCk, setSignUpCk] = useState(true);

    const body = {
        loginId : loginId,
        userPw : userPw,
        userName : userName
    }

    useEffect( () => {
        setSignUpCk(true);
    },[loginId]);


    return (<>
        <h2 align="center">Sign Up</h2>
        <div className="nam-login-wrapper">
            <div className="nam-login-row">
                <input type="text"
                       className="form-control"
                       placeholder="Input Your ID"
                       id="loginId"
                       name="loginId"
                       onChange={event => {
                           setLoginId(event.target.value)
                       }} />
                <button className="nam-check-id-btn"
                        onClick={() => onClickSignCheck(loginId,setSignUpCk)}>
                    Check ID
                </button>
            </div>
            <div className="nam-login-row">
                <input type="text"
                       className="form-control"
                       placeholder="Input Password"
                       name="input_pw"
                       onChange={event => {
                           setUserPw(event.target.value)
                       }} />
            </div>
            <div className="nam-login-row">
                <input type="text"
                       className="form-control"
                       placeholder="Input Your Name"
                       name="input_name"
                       onChange={event => {
                           setUserName(event.target.value)
                       }} />
            </div>
            <button type="button" className="nam-login-button" onClick={() => onClickSignUp({body})} disabled={signUpCk}>Sign Up</button>
            <Link to={`/nam/login_nam`}>
                <button className="nam-cancel-button">
                    Cancel
                </button>
            </Link>
        </div>
    </>);

}

export default NamMember;