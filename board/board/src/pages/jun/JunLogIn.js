import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './JunView.css';
import {Link} from "react-router-dom";

const HandleCreateSubmit = async({body}) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    const response = await axios.post('/memberjun/create', body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("저장되었습니다");
            window.location.href = "/jun";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function JunLogIn() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const body = {
        login_id : id,
        user_pw : pw,
    }

    return (<>
        <h2 align="center">회원가입</h2>
        <div className="jun-view-wrapper">
            <div className="jun-view-row">
                <label>아이디</label>
                <input onChange={(event) => setId(event.target.value)}></input>
            </div>
            <div className="jun-view-row">
                <label>패스워드</label>
                <input onChange={(event) => setPw(event.target.value)}></input>
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
            <button className="jun-view-go-list-btn">로그인</button>

        </div>
    </>);

}

export default JunLogIn;