import axios from "axios";

import './ScmView.css'
import React, {useState} from "react";

const HandleSignUp = async({body}) => {

    const headers = {
        'Content-Type': 'application/json'
    }

    await axios.post('/memberscm/scm', body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("가입되었습니다");
            window.location.href = "/scm/login";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

const HandleSignCheck = async(userId,setSignUpCk) => {

    await axios.get('/memberscm/scm/'+userId).then((response) => {
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
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [signUpCk, setSignUpCk] = useState(true);

    const body = {
        userId : userId,
        userPw : userPw
    }

    return (<>
        <div>
            <h2 align="center">회원가입</h2>
            <div className="scm-login-wrapper">
                <div className="scm-view-row">
                    <label>아이디</label>
                    <input id="userId" onChange={event => {
                        setUserId(event.target.value)}}></input>
                    <button align="right" className="scm-red-btn" onClick={() => HandleSignCheck(userId,setSignUpCk)}>
                        중복 검사
                    </button>
                </div>
                <div className="scm-view-row">
                    <label>비밀번호</label>
                    <input id="userPw" onChange={event => {
                        setUserPw(event.target.value)}}></input>
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