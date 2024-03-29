import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './ScmView.css';
import {Link} from "react-router-dom";

const HandleCreateSubmit = async({body}) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    await axios.post('/boardscm/create', body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("저장되었습니다");
            window.location.href = "/scm";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function ScmCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');

    useEffect(() => {
        setWriter(JSON.parse(sessionStorage.getItem("loginId")));
    }, []);

    const body = {
        title : title,
        content : content,
        writer : writer
    }

    return (<>
        <h2 align="center">게시글 작성</h2>
        <div className="scm-view-wrapper">
            <div className="scm-view-row">
                <label>제목</label>
                <input onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className="scm-view-row">
                <label>내용</label>
                <textarea onChange={(event) => setContent(event.target.value)}></textarea>
            </div>
            <div className="scm-view-row">
                <label>작성자</label>
                <input value={writer} disabled={true}></input>
            </div>
            <div className="scm-footer">
                <button className="scm-view-go-list-btn" onClick={() => HandleCreateSubmit({body})}>등록</button>
                <Link to={`/scm`}>
                    <button className="scm-view-go-list-btn">
                        목록
                    </button>
                </Link>
            </div>
        </div>
    </>);

}

export default ScmCreate;