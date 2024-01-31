import axios from "axios";

import './ScmView.css'
import React, {useState} from "react";

const HandleSignUp = async({body}) => {

    const headers = {
        'Content-Type': 'application/json'
    }

    await axios.post('/memberscm/create', body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("가입되었습니다");
            window.location.href = "/scm/login";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

const HandleSignCheck = async(loginId,setSignUpCk) => {

    await axios.get('/memberscm/read/'+loginId).then((response) => {
        if(response.data !== null) {
            alert("이미 사용중인 아이디 입니다.");
        } else {
            setSignUpCk(false);
            alert("사용 가능한 아이디 입니다.");
        }
    }).catch((error) => {
        console.log('error : '+error);
    });

}

function ScmMember() {
    const [loginId, setLoginId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [signUpCk, setSignUpCk] = useState(true);

    const body = {
        loginId : loginId,
        userPw : userPw,
        userName : userName
    }

    return (<>
        <div>
            <h2 align="center">회원가입</h2>
            <div className="scm-login-wrapper">
                <div className="scm-view-row">
                    <label>아이디</label>
                    <input id="loginId" onChange={event => {
                        setLoginId(event.target.value)}}></input>
                    <button align="right" className="scm-red-btn" onClick={() => HandleSignCheck(loginId,setSignUpCk)}>
                        중복 검사
                    </button>
                </div>
                <div className="scm-view-row">
                    <label>비밀번호</label>
                    <input id="userPw" onChange={event => {
                        setUserPw(event.target.value)}}></input>
                </div>
                <div className="scm-view-row">
                    <label>이름</label>
                    <input id="userName" onChange={event => {
                        setUserName(event.target.value)}}></input>
                </div>
                <div className="scm-footer">
                    <button id="signUp" align="right" className="scm-view-go-list-btn" onClick={() => HandleSignUp({body})} disabled={signUpCk}>
                        가입
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default ScmMember;