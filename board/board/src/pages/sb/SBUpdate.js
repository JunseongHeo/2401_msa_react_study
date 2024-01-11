import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './SBView.css'

const HandleUpdateSubmit = async(uid) => {

    const body = {
        uid : uid,
        title : document.getElementById("title").value,
        content : document.getElementById("content").value
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const response = await axios.put('http://localhost:8080/api/board_sb/'+uid, body, {headers: headers}).then((response) => {
        console.log('status : '+response.status);
        if(response.status === 200) {
            alert("수정되었습니다");
            window.location.href = "/sb";
        }
    }).catch((error) => {
        console.log('error : '+error);
    });
}

function GetData(sbId) {
    const [data, setData] = useState({});
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/api/board_sb/'+sbId).then((response)=> {
            setTitle(response.data.title);
            setContent(response.data.content);
            setData(response.data);
        })
    }, []);

    const item = (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="sb-view-wrapper">
            <div className="sb-view-row">
                <label>게시글 번호</label>
                <label>{data.uid}</label>
            </div>
            <div className="sb-view-row">
                <label>제목</label><input id="title" value={title} onChange={event => {
                setTitle(event.target.value);
            }}></input>
            </div>
            <div className="sb-view-row">
                <label>작성일</label>
                <label>{data.insertTime}</label>
            </div>
            <div className="sb-view-row">
                <label>내용</label>
                <textarea id="content" value={content} onChange={event => {
                    setContent(event.target.value);
                }}></textarea>
            </div>
            <div className="sb-footer">
                <button align="right" className="sb-view-go-list-btn" onClick={() => HandleUpdateSubmit(data.uid)}>
                    수정완료
                </button>
            </div>
        </div>
    </>);

    return item;
}

function SBUpdate() {
    const {sbId} = useParams();
    const item = GetData(sbId);

    return (<>
        <div>
            {item}
        </div>

   </> );
}

export default SBUpdate;