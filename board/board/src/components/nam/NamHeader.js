import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './NamHeader.css';

const HandleLogOut = async () => {
    sessionStorage.removeItem("loginId");
    window.location.href = "/nam/login_nam";
}

function NamHeader() {
    const [loginId, setLoginId] = useState('');

    useEffect(() => {
        let sessionId = JSON.parse(sessionStorage.getItem("loginId"));
        if (sessionId != null) {
            setLoginId(sessionId);
        } else {
            window.location.href = "/nam/login_nam";
        }
    }, []);

    return (
        <>
            <div className="nam-header">
                <h2 aligh="left">Board of NHR</h2>

                <span className="nam-user-info">
                    <h3 className="nam-user-greeting">Hello! {loginId}, have a nice day!</h3>
                    <button className="nam-sign-out-btn" onClick={() => HandleLogOut()}>
                        Sign Out
                    </button>
                </span>

                <Link to={`/nam/create`}>
                    <button align="right" className="nam-create-btn">
                        Write Something New
                    </button>
                </Link>
            </div>
        </>
    )
}

export default NamHeader;
