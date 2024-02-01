import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";

const DuplicateIDCheck = async({ member }) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const response = await axios.post('http://localhost:8080/api/member_sb/'+member.user_id, member, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if (response.status === 200) {
            alert("이미 가입된 ID입니다.");
            return true;
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
    return false;
}

const HandleCreateIDSubmit = async({ member, navigate }) => {
    if (member.login_id.trim().length == 0) {
        alert("ID를 입력하세요.");
        return;
    }
    if (member.user_pw.trim().length == 0) {
        alert("PW를 입력하세요.");
        return;
    }

    // 중복 ID 체크
    const isDuplicate = await DuplicateIDCheck({ member });

    // 중복된 ID가 없을 때 회원가입 진행
    if (!isDuplicate) {
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post('http://localhost:8080/api/member_sb', member, {headers: headers}).then((response) => {
            console.log('status : '+response.status);
            if (response.status === 200) {
                alert("회원가입 되었습니다.");
                navigate('/sbLogin');   // 회원가입 성공 시 리스트 페이지로 이동
            }
        }).catch((error) => {
            console.log('error : '+error);
        });
    }
}

function SBSignUp() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const member = {
        login_id : id,
        user_pw : pw
    }

    return (
        <Div>
            <h1>Sign Up Page</h1>
            <div>
                <p>ID <input type="text" onChange={(e) => setId(e.target.value)}/></p>
                <p>PW <input type="text" onChange={(e) => setPw(e.target.value)}/></p>
            </div>
            <button onClick={() => HandleCreateIDSubmit({ member, navigate })}>회원가입</button>
        </Div>
    );
}

const Div = styled.div`
    text-align: center;
`;

export default SBSignUp;