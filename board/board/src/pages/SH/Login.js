import React, { useState } from 'react';
import RegisterPage from './RegisterPage';
import Modal from '../../components/SH/Modal';
import "./formbox.css";
import {TextField} from "@mui/material";


function Login() {
    const [id,setid] = useState('');
    const [password,setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const LoginFunc = (e) => {
        e.preventDefault();
    }

    return (
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', width: '100%', height:'100vh'}}>
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={LoginFunc}>
            <div className="inputbox">
                <TextField text="아이디" label="아이디" type="text" fullWidth />
            </div>
            <div className="inputbox">
                <TextField id="userPw" type="password" maxLength="15" label="비밀번호" fullWidth />
            </div>
            <button className="btn-6" type="submit">로그인</button>
            <br />
                <button className="btn-6" onClick={() => setModalIsOpen(true)}>회원가입</button>
            {modalIsOpen && (
                <Modal closeModal={() => setModalIsOpen(!modalIsOpen)}>
                    <RegisterPage closeModal={() => setModalIsOpen(!modalIsOpen)}/>
                </Modal>
            )}
            <br />
        </form>
    </div>
    )
}

export default Login;