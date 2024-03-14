import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../VocHeader.css';

const VocHeader = props => {
    const [userName, setUserName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if ( localStorage.getItem("Authorization") ) {
            setUserName(localStorage.getItem("userName"));
            setIsAuthenticated(true);
        }
    }, []);

    let logout = ()=> {
        localStorage.clear();
        setIsAuthenticated(false);
        setUserName('');
        alert('로그아웃 되었습니다.');
    }

    let authButton = isAuthenticated ? (
        <>
            <span style={{marginRight:6}}>
                <span style={{fontWeight:"bold"}}>{userName}</span>님 안녕하세요
            </span>
            <Link to={`/jun/create`}>
                <button className="jun-view-go-list-btn">
                    게시글 작성
                </button>
            </Link>
            <Link to={`/jun`}>
                <button className="jun-view-go-list-btn" onClick={logout}>
                    로그아웃
                </button>
            </Link>
        </>
    ) : (
        <Link to={`/jun/logIn`}>
            <button className="jun-view-go-list-btn">
                로그인
            </button>
        </Link>
    );
    
    return (
        <div className="voc-header">
            <h2>Junseong's Board</h2>
            <div>
                {authButton}
            </div>
        </div>
    )
}

export default VocHeader;
