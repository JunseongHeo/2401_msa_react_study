import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './VocView.css'

const HandleUpdateSubmit = async(uid) => {

    const body = {
        uid : uid,
        title : document.getElementById("title").value,
        content : document.getElementById("content").value
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const response = await axios.put(`${process.env.REACT_APP_BOARD_API}` + "/boards/"+uid, body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("수정되었습니다");
            window.location.href = "/voc";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function GetData(vocId) {
    const [data, setData] = useState({});
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BOARD_API}` + "/boards/"+vocId).then((response)=> {
            setTitle(response.data.title);
            setContent(response.data.content);
            setData(response.data);
        })
    }, []);

    const item = (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="voc-view-wrapper">
            <div className="voc-view-row">
                <label>게시글 번호</label>
                <label>{data.uid}</label>
            </div>
            <div className="voc-view-row">
                <label>제목</label><input id="title" value={title} onChange={event => {
                setTitle(event.target.value);
            }}></input>
            </div>
            <div className="voc-view-row">
                <label>작성일</label>
                <label>{data.insertTime}</label>
            </div>
            <div className="voc-view-row">
                <label>내용</label>
                <textarea id="content" value={content} onChange={event => {
                    setContent(event.target.value);
                }}></textarea>
            </div>
            <div className="voc-footer">
                <button align="right" className="voc-view-go-list-btn" onClick={() => HandleUpdateSubmit(data.uid)}>
                    수정완료
                </button>
            </div>
        </div>
    </>);

    return item;
}

function VocUpdate() {
    const {vocId} = useParams();
    const item = GetData(vocId);

    return (<>
        <div>
            {item}
        </div>

    </> );
}

export default VocUpdate;