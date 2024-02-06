import React, { useState } from 'react';
import axios from 'axios';
import './NamLogin.css';
import {Link} from "react-router-dom";

const onClickLogin = (loginId,userPw) => {
    console.log("click to login");
    console.log("ID: " + loginId);
    console.log("PW: " + userPw);
    axios
        .post('/membernam/read/',
            {loginId: loginId, userPw: userPw}
        ).then((res) => {
            alert(res.data);
            console.log("res.data.loginId: " , res.data.loginId);
            console.log("res.data.msg: " , res.data.msg);
            if (res.data.loginId === undefined) {
                console.log("====", res.data.loginId);
                alert("입력하신 ID가 일치하지 않습니다.");
            } else if (res.data.loginId === null) {
                console.log("====", res.data.loginId);
                alert("입력하신 ID가 일치하지 않습니다.");
            } else if (res.data.userPw === undefined) {
                console.log("====", res.data.userPw);
                alert("입력하신 비밀번호가 일치하지 않습니다.");
            } else if (res.data.userPw === null) {
                console.log("====", res.data.userPw);
                alert("입력하신 비밀번호가 일치하지 않습니다.");
            } else if (res.data.loginId === loginId) {
                console.log("====", "success!");
                sessionStorage.setItem("loginId", loginId);
                sessionStorage.setItem("userPw", userPw);
            } else {
                document.location.href="/nam";
            }
        })
        .catch();
};

function NamLogin() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const HandleInputId = (e) => {
        setInputId(e.target.value);
    };

    const HandleInputPw = (e) => {
      setInputPw(e.target.value);
    };

    return (<>
        <h2 align="center">Sign In</h2>
        <div className="nam-login-wrapper">
            <div className="nam-login-row">
                <input type="text"
                       className="form-control"
                       placeholder="Enter ID"
                       name="input_id"
                       value={inputId}
                       onChange={HandleInputId}
                />
            </div>
            <div className="nam-login-row">
                <input type="text"
                       className="form-control"
                       placeholder="Enter Password"
                       name="input_pw"
                       value={inputPw}
                       onChange={HandleInputPw}
                />
            </div>
            <button type="button" className="login-button" onClick={() => onClickLogin(inputId,inputPw)}>Sign In</button>
            <Link to={`/nam/member`}>
                <button className="signup-button">
                    Sign Up
                </button>
            </Link>
        </div>
    </>);

}

export default NamLogin;