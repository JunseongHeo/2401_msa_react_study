import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function SBLogin() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        //

        // 로그인 성공 시
        setLoggedIn(true);

        // 리스트 페이지로 이동
        navigate('/sb');
    }

    return (
        <Div>
            <h1>Login Page</h1>
            <div>
                <p>ID <input type="text" value={id} onChange={(e) => setId(e.target.value)}/></p>
                <p>PW <input type="password" value={pw} onChange={(e) => setPw(e.target.value)}/></p>
            </div>
            <button onClick={handleLogin}>Login</button>&nbsp;
            <button onClick={(e) => navigate('/sbSignUp')}>Sign Up</button>
        </Div>
    );
}

const Div = styled.div`
  text-align: center;
`;

export default SBLogin;