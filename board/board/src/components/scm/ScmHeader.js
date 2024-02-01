import React, {useEffect, useState} from 'react';
import './ScmHeader.css';
import axios from "axios";

const HandleLogout = async() => {
    sessionStorage.removeItem("loginId");
    window.location.href = "/scm/login";
}

function ScmHeader() {
    const [loginId, setLoginId] = useState('');
    useEffect(() => {
        var sessionId = JSON.parse(sessionStorage.getItem("loginId"));
        if (sessionId != null) {
            setLoginId(sessionId);
        } else {
            window.location.href = "/scm/login";
        }
    }, []);

    return (
        <>
            <div className="scm-header">
                <h2 aligh="center">SCM 게시판</h2>

                <div className="login-info">
                    <span>{loginId}</span>님 안녕하세요
                    <button className="scm-red-btn" onClick={() => HandleLogout()}>
                        로그아웃
                    </button>
                </div>
            </div>
       </>
    )
}
export default ScmHeader;
