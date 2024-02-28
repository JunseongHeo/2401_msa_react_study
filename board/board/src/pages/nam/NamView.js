import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

import './NamView.css'
import {useLocation} from "react-router";

function NamDelete(namId,paging) {
    if(window.confirm("삭제하시겠습니까?")) {
        axios.delete('/nam/boards_nam/'+namId).then((response)=> {
            if(response.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/nam"+paging;
            };
        })
    }

}

function GetData(namId) {
    const [data, setData] = useState({});
    const [userCk, setUserCk] = useState(true);
    const location = useLocation();


    useEffect(() => {
        axios.get('/nam/boards_nam/'+namId).then((response)=> {
            setData(response.data);
            setUserCk(JSON.parse(sessionStorage.getItem("loginId")) === response.data.writer ? false : true);
        })
    }, [namId]);

    const item =  (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="nam-view-wrapper">
            <div className="nam-view-row">
                <label>게시글 번호</label>
                <label>{ data.uid }</label>
            </div>
            <div className="nam-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
            </div>
            <div className="nam-view-row">
                <label>작성일</label>
                <label>{ data.insertTime }</label>
            </div>
            <div className="nam-view-row">
                <label>내용</label>
                <div>
                    {
                        data.content
                    }
                </div>
            </div>
        </div>
        <div className="nam-footer">
            <Link to={`/nam`+location.state.paging}>
                <button className="nam-view-go-list-btn">목록</button>
            </Link>
            <Link to={`/nam/update/${namId}`} state={{paging:location.state.paging}}>
                <button align="right" className="nam-go-create-btn" disabled={userCk}>
                    수정
                </button>
            </Link>
            <button align="right" className="nam-view-go-list-btn" onClick={(e)=>{NamDelete(namId, location.state.paging, e)}} disabled={userCk}>
                삭제
            </button>
        </div>
    </>)

    return item;
}

function NamView() {
    const {namId} = useParams();
    const item = GetData(namId);

    return (<>
                <div>
                    {item}
                </div>
            </> );
}

export default NamView;