import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const handleLogin = async({ member, navigate, setLoggedIn }) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const response = await axios.post('http://localhost:8080/api/member_sb/login', member, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        setLoggedIn(true);
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('login_id', member.login_id);
        navigate('/sb');
    }).catch((error) => {
        console.log('error : '+error);
    });
}

const checkLoggedIn = () => {
    const sessionLoggedIn = sessionStorage.getItem('loggedIn');
    return sessionLoggedIn === 'true';
}

function SBLogin() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const member = {
        login_id : id,
        user_pw : pw
    }

    useEffect(() => {
        if (checkLoggedIn()) {
            navigate('/sb');
        }
    }, [navigate]);

    return (
        <Div>
            <h1>Login Page</h1>
            <div>
                <p>ID <input type="text" value={id} onChange={(e) => setId(e.target.value)}/></p>
                <p>PW <input type="password" value={pw} onChange={(e) => setPw(e.target.value)}/></p>
            </div>
            <button onClick={() => handleLogin({ member, navigate, setLoggedIn })}>Login</button>&nbsp;
            <button onClick={(e) => navigate('/sbSignUp')}>Sign Up</button>
        </Div>
    );
}

const Div = styled.div`
  text-align: center;
`;

export default SBLogin;