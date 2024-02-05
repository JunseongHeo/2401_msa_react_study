import React, { useState } from 'react';
import axios from 'axios';

import './NamView.css';

const onClickLogin = (inputId,inputPw) => {
    console.log("click to login");
    console.log("ID: " + inputId);
    console.log("PW: " + inputPw);
    axios
        .post(`${process.env.REACT_APP_BOARD_NAM}` + '/login_nam',
            {loginId: inputId, userPw: inputPw})
        .then((res) => {
            console.log(res);
            console.log("res.data.loginId: " , res.data.userId);
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
            } else if (res.data.loginId === inputId) {
                console.log("====", "success!");
                sessionStorage.setItem("loginId", inputId);
                sessionStorage.setItem("userPw", inputPw);
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
        <div className="nam-view-wrapper">
            <div className="nam-view-row">
                <label>ID</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter ID"
                       name="input_id"
                       value={inputId}
                       onChange={HandleInputId}
                />
            </div>
            <div className="nam-view-row">
                <label>PW</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter Password"
                       name="input_pw"
                       value={inputPw}
                       onChange={HandleInputPw}
                />
            </div>
            <button type="button" onClick={() => onClickLogin(inputId,inputPw)}>Sing In</button>
        </div>
    </>);

}

export default NamLogin;