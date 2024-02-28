import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import ScmHeader from '../../components/scm/ScmHeader';
import Paging from '../../components/scm/ScmPagination';
import {useLocation} from "react-router";

function Scm() {
    const [data, setData] = useState({}); // {} : object
    const [tot, setTot] = useState(0);
    const [pageable, setPageable] = useState({});
    const [searchParam, setSearchParam] = useState("title");
    const [searchText, setSearchText] = useState("");

    // location : 현재 브라우저 열려있는 페이지의 위치 정보가 담긴 브라우저 내장객체
    // useLocation() : 이동한 페이지에서 값을 가져올때 사용 ex)location.state.키
    const location = useLocation();
    let search = null;
    if(!location.search) {
        search = "?page=0&size=10" // 기본값
    } else {
        search = location.search; // location.search : 쿼리스트링 정보를 담은 프로퍼티
    }

    useEffect(() => {
        axios.get('/boardscm/read'+search+'&searchParam='+searchParam+'&searchText='+searchText).then((response) => {
            setData(response.data.content);
            setTot(response.data.totalElements);
            setPageable(response.data.pageable); // 컨트롤러에서 보낸 pageable
        })
    }, [search,searchParam,searchText]);
    // dependencies => 없으면 마운트(최초그려질때)와 업데이트시 / []이면 마운트시 / [.....]이면 마운트와 해당 상태변수가 변경될때 useEffect 실행

  /**  const item = (Object.values(data).filter(vo => vo.deleteYn === 'N')).map((item)
    * 필터 vo에 추가 */

    /* children : 컴포넌트의 여는 태그와 닫는 태그 사이의 내용 */
    const item = (Object.values(data)).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/scm/${item.uid}`} state={{paging:search}}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.updateTime}</CommonTableColumn>
        </CommonTableRow>
    ));

    return (<>
        <ScmHeader></ScmHeader>
        <div className="scm-btn">
            <div className="scm-btn-left">
                <Link to={`/scm/create`}>
                    <button className="scm-view-go-list-btn">
                        게시글 작성
                    </button>
                </Link>
            </div>
            <div className="scm-btn-right">
                <select className="scm-view-select" id="searchParam" onChange={event => {setSearchParam(event.target.value)}}>
                    <option value="title">제목</option>
                    <option value="writer">작성자</option>
                </select>
                <input className="scm-view-input" id="searchText" onChange={event => {setSearchText(event.target.value)}}/>
            </div>
        </div>
        <CommonTable headersName={['글번호', '제목', '작성자', '등록일', '수정일']}
                     headersWidth={['5%', '50%', '15%', '15%', '15%']}>
            {item}
        </CommonTable>
        <Paging page={pageable.pageNumber+1} tot={tot}/>
    </>);
}

export default Scm;