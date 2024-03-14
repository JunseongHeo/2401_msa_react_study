import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './JunView.css';
import {Link} from "react-router-dom";

function joinHandler({body}){
    const jwt = require("jsonwebtoken");
    try{
        axios.post("/login" , body, {headers: {"Content-Type": 'application/json'}})
                .then(res =>{
                    let jwtToken = res.headers.get("Authorization");
                    localStorage.setItem("Authorization", jwtToken);

                    const decode = jwt.decode(jwtToken, {complete : true});
                    localStorage.setItem("loginId", decode.payload.id);
                    localStorage.setItem("userName", decode.payload.username);
                    window.location.href = "/jun";
                })
                .catch(ex=>{
                    console.log("login requset fail : " + ex);
                    alert('입력하신 아이디와 패스워드를 확인해주세요.');
                    window.location.href = "/jun/logIn";
                });
    }catch(e){
        console.log(e);
    }
}

const enterLoginEvent =  (e, {body}) => {
    if(e.key === 'Enter') {
        joinHandler({body});
    }
}

function JunLogIn() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const body = {
        username : id,
        password : pw,
    }

    return (<>
        <h2 align="center">회원가입</h2>
        <div className="jun-view-wrapper">
            <div className="jun-view-row">
                <label>아이디</label>
                <input
                    onChange={(event) => setId(event.target.value)}
                    onKeyPress={(e) => enterLoginEvent(e, {body})} />
            </div>
            <div className="jun-view-row">
                <label>패스워드</label>
                <input
                    type={"password"}
                    onChange={(event) => setPw(event.target.value)}
                    onKeyPress={(e) => enterLoginEvent(e, {body})} />
            </div>

            <Link to={`/jun`}>
                <button align="right" className="jun-view-go-list-btn">
                    목록으로
                </button>
            </Link>
            <Link to={`/jun/createMember`}>
                <button align="right" className="jun-view-go-list-btn">
                    회원가입
                </button>
            </Link>
            <button className="jun-view-go-list-btn" onClick={()=> joinHandler({body})}>로그인</button>

        </div>
    </>);

}

export default JunLogIn;