import React, { useState } from 'react';
import axios from "axios";
import "./formbox.css";
import {TextField} from "@mui/material";

const onSubmitHandler = async({body}) => {

    const headers = {
        'Content-Type': 'application/json'
    }
    let idCheck = null;
    await axios.get(process.env.REACT_APP_MEMBER +'/MemberSH/existBy/' + body.loginId).then((respons) => {
        if(respons.data === true){
            alert("이미 존재하는 아이디 입니다. 다시 입력 부탁드립니다.");
        }else{
            idCheck = respons.data;
        }
    })

    if(idCheck === false){
        await axios.post(process.env.REACT_APP_MEMBER +'/MemberSH/sh', body, {headers: headers}).then((response) => {
            console.log('status : '+response.status);
            if(response.status === 200) {
                alert("가입되었습니다");
                body.props.closeModal();
            }
        }).catch((error) => {
            console.log('error : '+error);
        });
    }
}

function RegisterPage(props) {
    //아이디, 이름, 패스워드, 패스워드 확인
    const [loginId,setid] = useState('');
    const [userName, setName] = useState('');
    const [userPw,setPassword] = useState('');
    const [ConfirmPw, setConfirmPw] = useState('');

    //오류 메시지 상태저장
    const [idMessage, setIdMessage] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [confirmPwMessage, setConfirmPwMessage] = useState('');

    //유효성 검사
    const [isId, setIsId] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isConfirmPw, setIsConfirmPw] = useState(false);

    const body = {
        loginId : loginId,
        userName : userName,
        userPw : userPw,
        ConfirmPw : ConfirmPw,
        props : props
    }

    const onChangeId = (e) => {
        setid(e.target.value);
        if(e.target.value.length < 5 || e.target.value.length > 8){
            setIdMessage('5글자 이상 8자 미만으로 입력해주세요.');
            setIsId(false);
        } else {
            setIdMessage('올바른 형식입니다.');
            setIsId(true);
        }
    }

    const onChangeName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 2 || e.target.value.length > 5){
            setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
            setIsName(false);
        } else {
            setNameMessage('올바른 이름 형식입니다.');
            setIsName(true);
        }
    }

    const onChangePw = (e) => {
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9)]).{8,25}$/;
        if(!passwordRegex.test(e.target.value)){
            setPwMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
            setIsPw(false);
        } else {
            setPwMessage('안전한 비밀번호에요 :)');
            setIsPw(true);
        }
    }

    const onChangeConfirmPw = (e) => {
        setConfirmPw(e.target.value);
        if(userPw === e.target.value){
            setConfirmPwMessage('비밀번호를 똑같이 입력했어요 : )');
            setIsConfirmPw(true);
        } else {
            setConfirmPwMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜㅜ');
            setIsConfirmPw(false);
        }
    }

    return (
    <div>
        <div >
            <h3>회원가입</h3>
            <div className="inputbox">
                <TextField text="아이디" label="아이디" type="text" fullWidth onChange={onChangeId}/>
                {loginId.length > 0 && <span className ={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
            </div>
            <div className="inputbox">
                <TextField text="이름"  label="이름" type='text' fullWidth onChange={onChangeName}/>
                {userName.length > 0 && <span className ={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
            </div>
            <div className="inputbox">
                 <TextField id="userPw" type="password" maxLength="15" label="비밀번호" fullWidth onChange={onChangePw}/>
                {userPw.length > 0 && <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span> }
            </div>
            <div className="inputbox">
                <TextField type="password" fullWidth label="비밀번호 확인" onChange={onChangeConfirmPw}/>
                {ConfirmPw.length > 0 && <span className={`message ${isConfirmPw ? 'success' : 'error'}`}>{confirmPwMessage}</span> }
            </div>
            <button className="button btn-6" disabled={!(isName && isId && isPw && isConfirmPw)} onClick={() => onSubmitHandler({body})}><span>회원등록</span></button>
        </div>
    </div>
    )
}

export default RegisterPage;