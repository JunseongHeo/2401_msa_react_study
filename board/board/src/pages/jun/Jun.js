import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import JunHeader from '../../components/jun/JunHeader';
import JunPaging from '../../components/jun/JunPaging';
import {useLocation} from "react-router";

function Jun() {
    const location = useLocation();
    const [data, setData] = useState({});
    const [pageInfo, setPageInfo] = useState({});
    const [pageTotalCount, setPageTotalCount] = useState({});

    let search = null;

    if(!location.search) {
        search = "?page=0&size=10"
    } else {
        search = location.search;
    }
    useEffect(() => {
        axios.get('/api/junboards'+search).then((response) => {
            setData(response.data.content);
            setPageTotalCount(response.data.totalElements);
            setPageInfo(response.data.pageable);
        })
    }, [search]);

    const item = Object.values(data).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/juns/${item.uid}`}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return (<>
        <JunHeader></JunHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <JunPaging pageCurrent={pageInfo.pageNumber+1} pageTotal={pageTotalCount} />
    </>);
}

export default Jun;