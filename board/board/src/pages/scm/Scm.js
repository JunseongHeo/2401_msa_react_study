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
        axios.get('/boardscm/read'+search).then((response) => {
            setData(response.data.content);
            setTot(response.data.totalElements);
            setPageable(response.data.pageable); // 컨트롤러에서 보낸 pageable
        })
    }, [search]);

  /**  const item = (Object.values(data).filter(vo => vo.deleteYn === 'N')).map((item)
    * 필터 vo에 추가 */

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
        <div className="btn-right">
            <Link to={`/scm/create`}>
                <button className="scm-view-go-list-btn">
                    게시글 작성
                </button>
            </Link>
        </div>
        <CommonTable headersName={['글번호', '제목', '작성자', '등록일', '수정일']}
                     headersWidth={['5%', '50%', '15%', '15%', '15%']}>
            {item}
        </CommonTable>
        <Paging page={pageable.pageNumber+1} tot={tot}/>
    </>);
}

export default Scm;