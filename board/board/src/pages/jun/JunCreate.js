import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './JunView.css';

const HandleCreateSubmit = async({body}) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    const response = await axios.post('http://localhost:8080/api/junboards', body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("저장되었습니다");
            window.location.href = "/jun";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function JunCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');

    const body = {
        title : title,
        content : content,
        writer : writer
    }

    return (<>
        <h2 align="center">게시글 작성</h2>
        <div className="jun-view-wrapper">
            <div className="jun-view-row">
                <label>제목</label>
                <input onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className="jun-view-row">
                <label>내용</label>
                <textarea onChange={(event) => setContent(event.target.value)}></textarea>
            </div>
            <div className="jun-view-row">
                <label>작성자</label>
                <input onChange={(event) => setWriter(event.target.value)}></input>
            </div>
            <button className="jun-view-go-list-btn" onClick={() => HandleCreateSubmit({body})}>등록</button>
        </div>
    </>);

}

export default JunCreate;