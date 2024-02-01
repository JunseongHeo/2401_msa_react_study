import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SBHeader.css';

const SBHeader = props => {
    const {headersName, children} = props;
    const navigate = useNavigate();

    return (
        <div className="sb-header">
            <h2 aligh="left">SB Board</h2>
            <Link to={`/sb/create`}>
                <button align="right" className="sb-view-go-list-btn">
                    게시글 작성
                </button>
            </Link>

            <p>{sessionStorage.getItem('login_id')}님 로그인 되었습니다.</p>
            <button onClick={() => {
                sessionStorage.removeItem('loggedIn');
                sessionStorage.removeItem('login_id');
                navigate('/sbLogin');
            }}>로그아웃</button>
        </div>
    )
}

export default SBHeader;
