import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import NamHeader from '../../components/nam/NamHeader';
import NamPaging from './NamPaging';
import {useLocation} from "react-router";

function Nam() {
    // location : 현재 브라우저 열려있는 페이지의 위치 정보가 담긴 브라우저 내장객체
    // useLocation() : 이동한 페이지에서 값을 가져올때 사용 ex)location.state.key
    const location = useLocation();
    const [data, setData] = useState({});
    const [pageInfo, setPageInfo] = useState({});
    const [pageTotalCount, setPageTotalCount] = useState({});

    let search = null;

    if (!location.search) {
        search = "?page=0&size=5";
    } else {
        search = location.search; // queryString 정보 담은 property
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BOARD_NAM}`+'/boards_nam'+search).then((response) => {
            setData(response.data.content);
            setPageTotalCount(response.data.totalElements);
            setPageInfo(response.data.pageable);
            console.log(response.data);
        })
    }, [search]);

    //.filter(vo => vo.deleteYn === 'N')
    const item = (Object.values(data)).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/nam/${item.uid}`} state={{paging:search}}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return (<>
        <NamHeader></NamHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <NamPaging pageCurrent={pageInfo.pageNumber+1} pageTotal={pageTotalCount}/>
    </>);
}

export default Nam;