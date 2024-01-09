import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

import './JunView.css'

function JunDelete(props) {
    if(window.confirm("삭제하시겠습니까?")) {
        axios.delete('http://localhost:8080/api/junboards/'+props).then((response)=> {
            if(response.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/jun"
            };
        })
    }

}

function GetData(junId) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/junboards/'+junId).then((response)=> {
            setData(response.data);
        })
    }, []);

    const item =  (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="jun-view-wrapper">
            <div className="jun-view-row">
                <label>게시글 번호</label>
                <label>{ data.uid }</label>
            </div>
            <div className="jun-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
            </div>
            <div className="jun-view-row">
                <label>작성일</label>
                <label>{ data.insertTime }</label>
            </div>
            <div className="jun-view-row">
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

function JunView() {
    const {junId} = useParams();
    const item = GetData(junId);
    return (<>
        <div>
            {item}
        </div>
        <div className="jun-footer">
            <Link to={`/jun/update/${junId}`}>
                <button align="right" className="jun-view-go-list-btn">
                    수정
                </button>
            </Link>
                <button align="right" className="jun-view-go-list-btn" onClick={(e)=>{JunDelete(junId, e)}}>
                    삭제
                </button>
        </div>
   </> );
}

export default JunView;