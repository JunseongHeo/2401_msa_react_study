import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

import './BoardView.css';

function BoardDelete(props){
    if(window.confirm("삭제하시겠습니까?")){
        axios.delete(process.env.REACT_APP_BOARD + "/boards/" +props).then((reponse)=>{
            if(reponse.status === 200) {
                alert("삭제되었습니다.");
                window.location.href = "/Board"
            };
        })
    }
}


function GetData(bId) {
    const [data, setData] = useState({});
    useEffect(()=> {
        axios.get(process.env.REACT_APP_BOARD + "/boards/" + bId).then((response) => {
            setData(response.data);
        })
    });

    const item = (<>
        <h2 align="center">게시글 상세정보</h2>
        <div className="b-view-wrapper">
            <div className="b-view-row">
                <label>게시글 번호</label>
                <label>{ data.uid }</label>
            </div>
            <div className="b-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
            </div>
            <div className="b-view-row">
                <label>작성일</label>
                <label>{ data.insertTime }</label>
            </div>
            <div className="b-view-row">
                <label>내용</label>
                <div>
                    {
                        data.content
                    }
                </div>
            </div>
        </div></>
    );

    return item;
}


function BoardView() {
    const {bId} = useParams();
    const item = GetData(bId);

    return (<>
        <div>
            {item}
        </div>
        <div className="b-footer">
            <Link to={`/board/`}>
            <button className="b-view-go-list-btn">
                목록
            </button>
            </Link>
            <Link to={`/board/update/${bId}`}>
                <button align="right" className="b-view-go-list-btn">
                    수정
                </button>
            </Link>
            <button align="right" className="b-view-go-list-btn" onClick={(e)=>{BoardDelete(bId, e)}}>
                삭제
            </button>
        </div>
    </>);
}
export default BoardView;