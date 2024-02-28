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

const onClickLogin = async(loginId,userPw) => {
    console.log("click to login");
    console.log("ID: " + loginId);
    console.log("PW: " + userPw);

    if (loginId === '' || loginId === null) {
        alert("아이디를 입력해주세요.");
        return;
    }

    if (userPw === '' || userPw === null) {
        alert("비밀번호를 입력해주세요.");
        return;
    }

    // await 키워드는 async 함수 안에서만 사용 가능함
    await axios
        .get(`/membernam/read/${loginId}`)
        .then((res) => {
            console.log("res.data.loginId: " , res.data.loginId);
            console.log("res.data.loginId: " , res.data.userPw);
            console.log(res.data);


            console.log("res.data.msg: " , res.data.msg);

            if (res.data.loginId === undefined || res.data.loginId === null) {
                console.log("====", res.data.loginId);
                alert("입력하신 ID가 일치하지 않습니다.");

            } else if (res.data.userPw === undefined || res.data.userPw === null) {
                console.log("====", res.data.userPw);
                alert("입력하신 비밀번호가 일치하지 않습니다.");

            } else if (res.data.loginId === loginId) {
                console.log("====", "success!");
                sessionStorage.setItem("loginId", JSON.stringify(loginId));
                sessionStorage.setItem("userPw", JSON.stringify(userPw));
                document.location.href="/nam";
            }
        })
        .catch((error) => {
            console.log('error : '+error);
        });
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
            <button type="button" className="nam-login-button" onClick={() => onClickLogin(inputId,inputPw)}>Sign In</button>
            <Link to={`/nam/member`}>
                <button className="nam-signup-button">
                    Sign Up
                </button>
            </Link>
        </div>
    </>);

}

export default NamLogin;