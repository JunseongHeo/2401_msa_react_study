import axios from "axios";

import './ScmView.css'
import React, {useEffect, useState} from "react";

const HandleSignUp = async({body}) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    if (body.loginId === '' || body.userPw === '') {
        alert("아이디와 비밀번호를 모두 입력해주세요");
        return;
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

function ScmMember() {
    const [loginId, setLoginId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [signUpCk, setSignUpCk] = useState(true);
    const [signUpCkColor, setSignUpCkColor] = useState('');
    const [signUpCkMsg, setSignUpCkMsg] = useState('');

    const body = {
        loginId : loginId,
        userPw : userPw,
        userName : userName
    }

    useEffect(() => {
        axios.get('/memberscm/read/'+ (loginId===''?null:loginId)).then((response) => {
            if (loginId === '') {
                signUpSet(false,'','');
            } else if(response.data !== null) {
                signUpSet(false,'red','이미 사용중인 아이디 입니다');
            } else {
                signUpSet(true,'blue','사용 가능한 아이디 입니다');
            }
        }).catch((error) => {
            console.log('error : '+error);
        });

        function signUpSet(ck,color,msg) {
            setSignUpCk(ck && userPw); // 아이디중복체크 및 비번입력여부 확인
            setSignUpCkColor(color);
            setSignUpCkMsg(msg);
        }
    }, [loginId,userPw]);

    return (<>
        <div>
            <h2 align="center">회원가입</h2>
            <div className="scm-login-wrapper">
                <div className="scm-view-row">
                    <label>아이디</label>
                    <input id="loginId" onChange={(event) => {setLoginId(event.target.value)}}></input>
                </div>
                <div className="scm-id-ck" id={signUpCkColor}>{signUpCkMsg}</div>
                <div className="scm-view-row">
                    <label>비밀번호</label>
                    <input id="userPw" onChange={(event) => {setUserPw(event.target.value)}}></input>
                </div>
                <div className="scm-view-row">
                    <label>이름</label>
                    <input id="userName" onChange={event => {setUserName(event.target.value)}}></input>
                </div>
                <div className="scm-footer">
                    <button id="signUp" align="right" className="scm-view-go-list-btn" onClick={() => HandleSignUp({body})} disabled={!signUpCk}>
                        가입
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default ScmMember;