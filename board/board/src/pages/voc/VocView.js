import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

import './VocView.css'

function VocDelete(props) {
    if(window.confirm("삭제하시겠습니까?")) {
        axios.delete('http://localhost:8080/api/boards/'+props).then((response)=> {
            if(response.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/voc"
            };
        })
    }

}

function GetData(vocId) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/boards/'+vocId).then((response)=> {
            setData(response.data);
        })
    }, []);

    const item =  (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="voc-view-wrapper">
            <div className="voc-view-row">
                <label>게시글 번호</label>
                <label>{ data.uid }</label>
            </div>
            <div className="voc-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
            </div>
            <div className="voc-view-row">
                <label>작성일</label>
                <label>{ data.insertTime }</label>
            </div>
            <div className="voc-view-row">
                <label>내용</label>
                <div>
                    {
                        data.content
                    }
                </div>
            </div>
        </div></>)

    return item;
}

function VocView() {
    const {vocId} = useParams();
    const item = GetData(vocId);
    return (<>
        <div>
            {item}
        </div>
        <div className="voc-footer">
            <Link to={`/voc/update/${vocId}`}>
                <button align="right" className="voc-view-go-list-btn">
                    수정
                </button>
            </Link>
                <button align="right" className="voc-view-go-list-btn" onClick={(e)=>{VocDelete(vocId, e)}}>
                    삭제
                </button>
        </div>
   </> );
}

export default VocView;