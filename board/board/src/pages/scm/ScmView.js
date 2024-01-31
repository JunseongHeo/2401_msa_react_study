import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

import './ScmView.css'
import {useLocation} from "react-router";

function ScmDelete(scmId,paging) {
    if(window.confirm("삭제하시겠습니까?")) {
        axios.delete('/boardscm/delete/'+scmId).then((response)=> {
            if(response.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/scm"+paging
            };
        })
    }

}

function GetData(scmId) {
    const [data, setData] = useState({});
    const [userCk, setUserCk] = useState(true);
    const location = useLocation();

    useEffect(() => {
        axios.get('/boardscm/read/'+scmId).then((response)=> {
            setData(response.data);
            setUserCk(JSON.parse(sessionStorage.getItem("loginId")) === response.data.writer ? false : true);
        })
    }, [scmId]);

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
                <label>작성자</label>
                <div className="writer">
                    {
                        data.writer
                    }
                </div>
            </div>
            <div className="scm-view-row">
                <label>내용</label>
                <div className="content">
                    {
                        data.content
                    }
                </div>
            </div>
        </div>
        <div className="scm-footer">
            <Link to={`/scm`+location.state.paging}>
                <button className="scm-view-go-list-btn">
                    목록
                </button>
            </Link>
            <Link to={`/scm/update/${scmId}`} state={{paging:location.state.paging}}>
                <button className="scm-view-go-list-btn" disabled={userCk}>
                    수정
                </button>
            </Link>
            <button className="scm-view-go-list-btn" onClick={(e)=>{ScmDelete(scmId,location.state.paging, e)}} disabled={userCk}>
                삭제
            </button>
        </div>
    </>)

    return item;
}

function ScmView() {
    const {scmId} = useParams();
    const item = GetData(scmId);

    return (<>
        <div>
            {item}
        </div>
   </> );
}

export default ScmView;