import React, { useState } from 'react';
import axios from 'axios';
import './NamLogin.css';
import {Link} from "react-router-dom";

/*const onKeyPressLogin = (loginId,userPw) => {
    console.log(loginId,userPw);
    return;

    if (this.key === 'Enter') {
        console.log(loginId,userPw);

        // onClickLogin;

    }
}*/

const onClickLogin = async({body}) => {
    console.log("click to login");

    const jwt = require("jsonwebtoken");
    const headers = {
        'Content-Type': 'application/json'
    }

    if (body.loginId === '' || body.loginId === null) {
        alert("아이디를 입력해주세요.");
        return;
    }

    if (body.userPw === '' || body.userPw === null) {
        alert("비밀번호를 입력해주세요.");
        return;
    }

    // await 키워드는 async 함수 안에서만 사용 가능함
    try {
        await axios
            // .post(`/membernam/read/signIn/${body.loginId}/${body.userPw}`)   // security 적용 전
            .post(`/login`,body,{headers:headers})
            .then((response) => {
                let jwtToken = response.headers.get("Authorization");
                localStorage.setItem("Authorization", jwtToken);

                const decode = jwt.decode(jwtToken, {complete: true});
                localStorage.setItem("loginId", decode.payload.id);
                localStorage.setItem("username", decode.payload.username);

                document.location.href="/nam";
            })
            .catch((ex) => {
                console.log('login request failed : '+ ex);
                alert('Check ID and Password');
                window.location.href = "/nam/login_nam";
            });
    } catch(error) {
        console.log("error : " + error);
    }

}

function NamLogin() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const body = {
        username : inputId,
        password : inputPw
    }

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
                       placeholder="Input ID"
                       name="input_id"
                       value={inputId}
                       onChange={HandleInputId}
                />
            </div>
            <div className="nam-login-row">
                <input type="text"
                       className="form-control"
                       placeholder="Input Password"
                       name="input_pw"
                       value={inputPw}
                       onChange={HandleInputPw}
                       // onKeyPress={() => onKeyPressLogin(inputId,inputPw)}
                />
            </div>
            <button type="button" className="nam-login-button" onClick={() => onClickLogin({body})}>Sign In</button>
            <Link to={`/nam/member`}>
                <button className="nam-signup-button">
                    Sign Up
                </button>
            </Link>
        </div>
    </>);

}

export default NamLogin;