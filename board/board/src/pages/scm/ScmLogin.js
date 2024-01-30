import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import './ScmView.css'

const HandleLogin = async(userId,userPw) => {

    await axios.get('/memberscm/scm/'+userId).then((response) => {
        if(response.data !== null && response.data.userPw === userPw) {
            sessionStorage.setItem("loginId", JSON.stringify(userId));
            window.location.href = "/scm";
        } else {
            alert("아이디 비밀번호를 다시 확인해주세요.");
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function ScmLogin() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    return (<>
        <div>
            <h2 align="center">로그인</h2>
            <div className="scm-login-wrapper">
                <div className="scm-view-row">
                    <label>아이디</label>
                    <input id="userId" onChange={event => {
                        setUserId(event.target.value)}}></input>
                </div>
                <div className="scm-view-row">
                    <label>비밀번호</label>
                    <input id="userPw" onChange={event => {
                        setUserPw(event.target.value)}}></input>
                </div>
                <div className="scm-footer">
                    <button align="right" className="scm-view-go-list-btn" onClick={() => HandleLogin(userId,userPw)}>
                        로그인
                    </button>
                    <Link to={`/scm/member`}>
                        <button className="scm-view-go-list-btn">
                            회원가입
                        </button>
                    </Link>
                </div>
            </div>
        </div>
   </> );
}

export default ScmLogin;