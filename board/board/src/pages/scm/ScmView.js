import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

import './ScmView.css'

function ScmDelete(props) {
    if(window.confirm("삭제하시겠습니까?")) {
        axios.delete('http://localhost:8080/api/boardscm/'+props).then((response)=> {
            if(response.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/scm"
            };
        })
    }

}

function GetData(scmId) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/boardscm/'+scmId).then((response)=> {
            setData(response.data);
        })
    }, []);

    const item =  (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="scm-view-wrapper">
            <div className="scm-view-row">
                <label>게시글 번호</label>
                <label>{ data.uid }</label>
            </div>
            <div className="scm-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
            </div>
            <div className="scm-view-row">
                <label>작성일</label>
                <label>{ data.insertTime }</label>
            </div>
            <div className="scm-view-row">
                <label>내용</label>
                <div className="content">
                    {
                        data.content
                    }
                </div>
            </div>
        </div></>)

    return item;
}

function ScmView() {
    const {scmId} = useParams();
    const item = GetData(scmId);
    return (<>
        <div>
            {item}
        </div>
        <div className="scm-footer">
            <Link to={`/scm/update/${scmId}`}>
                <button className="scm-view-go-list-btn">
                    수정
                </button>
            </Link>
                <button className="scm-view-go-list-btn" onClick={(e)=>{ScmDelete(scmId, e)}}>
                    삭제
                </button>
        </div>
   </> );
}

export default ScmView;