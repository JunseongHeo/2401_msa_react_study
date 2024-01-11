 import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

import './SBView.css'

function SBDelete(props) {
    if(window.confirm("삭제하시겠습니까?")) {
        axios.delete('http://localhost:8080/api/board_sb/'+props).then((response)=> {
            if(response.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/sb"
            };
        })
    }

}

function GetData(sbId) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/board_sb/'+sbId).then((response)=> {
            setData(response.data);
        })
    }, []);

    const item =  (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="sb-view-wrapper">
            <div className="sb-view-row">
                <label>게시글 번호</label>
                <label>{ data.uid }</label>
            </div>
            <div className="sb-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
            </div>
            <div className="sb-view-row">
                <label>작성일</label>
                <label>{ data.insertTime }</label>
            </div>
            <div className="sb-view-row">
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

function SBView() {
    const {sbId} = useParams();
    const item = GetData(sbId);
    return (<>
        <div>
            {item}
        </div>
        <div className="sb-footer">
            <Link to={`/sb/update/${sbId}`}>
                <button align="right" className="sb-view-go-list-btn">
                    수정
                </button>
            </Link>
                <button align="right" className="sb-view-go-list-btn" onClick={(e)=>{SBDelete(sbId, e)}}>
                    삭제
                </button>
        </div>
   </> );
}

export default SBView;