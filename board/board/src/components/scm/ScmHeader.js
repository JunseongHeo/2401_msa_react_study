import React, {useEffect, useState} from 'react';
import './ScmHeader.css';

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
                <h2>SCM 게시판</h2>

                <span className="scm-user-wrapper">
                    <span className="scm-user-hi">{loginId} 님 안녕하세요</span>
                    <button className="scm-red-btn" onClick={() => HandleLogout()}>
                        로그아웃
                    </button>
                </span>
            </div>
       </>
    )
}
export default ScmHeader;
