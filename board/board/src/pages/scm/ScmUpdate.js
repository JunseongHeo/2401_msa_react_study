import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './ScmView.css'
import {useLocation} from "react-router";

const HandleUpdateSubmit = async(uid,paging) => {

    const body = {
        uid : uid,
        title : document.getElementById("title").value,
        content : document.getElementById("content").value
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    await axios.put('http://localhost:8080/api/boardscm/'+uid, body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("수정되었습니다");
            window.location.href = "/scm"+paging;
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function GetData(scmId) {
    const [data, setData] = useState({});
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:8080/api/boardscm/'+scmId).then((response)=> {
            setTitle(response.data.title);
            setContent(response.data.content);
            setData(response.data);
        })
    }, []);

    const item = (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="scm-view-wrapper">
            <div className="scm-view-row">
                <label>게시글 번호</label>
                <label>{data.uid}</label>
            </div>
            <div className="scm-view-row">
                <label>제목</label><input id="title" value={title} onChange={event => {
                setTitle(event.target.value);
            }}></input>
            </div>
            <div className="scm-view-row">
                <label>작성일</label>
                <label>{data.insertTime}</label>
            </div>
            <div className="scm-view-row">
                <label>내용</label>
                <textarea id="content" value={content} onChange={event => {
                    setContent(event.target.value);
                }}></textarea>
            </div>
            <div className="scm-footer">
                <button align="right" className="scm-view-go-list-btn" onClick={() => HandleUpdateSubmit(data.uid, location.state.paging)}>
                    수정완료
                </button>
            </div>
        </div>
    </>);

    return item;
}

function ScmUpdate() {
    const {scmId} = useParams();
    const item = GetData(scmId);

    return (<>
        <div>
            {item}
        </div>

   </> );
}

export default ScmUpdate;