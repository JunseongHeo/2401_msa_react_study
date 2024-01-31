import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './JunView.css';

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

function JunCreateMember() {
    const [loginId, setLoginId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');

    const body = {
        login_id : loginId,
        user_pw : userPw,
        user_name : userName
    }

    return (<>
        <h2 align="center">회원가입</h2>
        <div className="jun-view-wrapper">
            <div className="jun-view-row">
                <label>아이디</label>
                <input onChange={(event) => setLoginId(event.target.value)}></input>
            </div>
            <div className="jun-view-row">
                <label>패스워드</label>
                <input onChange={(event) => setUserPw(event.target.value)}></input>
            </div>
            <div className="jun-view-row">
                <label>이름</label>
                <input onChange={(event) => setUserName(event.target.value)}></input>
            </div>
            <button className="jun-view-go-list-btn" onClick={() => HandleCreateSubmit({body})}>등록</button>
        </div>
    </>);

}

export default JunCreateMember;