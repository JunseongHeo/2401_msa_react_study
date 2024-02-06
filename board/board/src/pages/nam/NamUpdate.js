import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './NamView.css'

const HandleUpdateSubmit = async(uid) => {

    const body = {
        uid : uid,
        title : document.getElementById("title").value,
        content : document.getElementById("content").value
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const response = await axios.put('/nam/boards_nam'+uid, body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("수정되었습니다");
            window.location.href = "/nam";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function GetData(namId) {
    const [data, setData] = useState({});
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        axios.get('/nam/boards_nam/'+namId).then((response)=> {
            setTitle(response.data.title);
            setContent(response.data.content);
            setData(response.data);
        })
    }, []);

    const item = (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="nam-view-wrapper">
            <div className="nam-view-row">
                <label>게시글 번호</label>
                <label>{data.uid}</label>
            </div>
            <div className="nam-view-row">
                <label>제목</label><input id="title" value={title} onChange={event => {
                setTitle(event.target.value);
            }}></input>
            </div>
            <div className="nam-view-row">
                <label>작성일</label>
                <label>{data.insertTime}</label>
            </div>
            <div className="nam-view-row">
                <label>내용</label>
                <textarea id="content" value={content} onChange={event => {
                    setContent(event.target.value);
                }}></textarea>
            </div>
            <div className="nam-footer">
                <button align="right" className="nam-view-go-list-btn" onClick={() => HandleUpdateSubmit(data.uid)}>
                    수정완료
                </button>
            </div>
        </div>
    </>);

    return item;
}

function NamUpdate() {
    const {namId} = useParams();
    const item = GetData(namId);

    return (<>
        <div>
            {item}
        </div>

    </> );
}

export default NamUpdate;