import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './ScmHeader.css';

function ScmHeader() {
    const [userId, setUserId] = useState('');
    useEffect(() => {
        setUserId(JSON.parse(sessionStorage.getItem("loginId")));
    }, []);

    return (
        <>
            <div className="scm-header">
                <h2 aligh="center">SCM 게시판</h2>

                <div className="login-info">
                    <span>{userId}</span>님 안녕하세요
                    <Link to={`/scm/login`}>
                        <button className="scm-red-btn">
                            로그아웃
                        </button>
                    </Link>
                </div>
            </div>
       </>
    )
}
export default ScmHeader;
