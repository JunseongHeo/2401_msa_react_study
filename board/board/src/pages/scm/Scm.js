import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import ScmHeader from '../../components/ScmHeader';
import Paging from '../../pages/scm/ScmPagination';
import {useLocation} from "react-router";

function Scm() {
    const [data, setData] = useState({});
    const [tot, setTot] = useState({});
    const [pageable, setPageable] = useState({});
    const location = useLocation();
    let search = null;
    if(!location.search) {
        search = "?page=0&size=1"
    } else {
        search = location.search; // 쿼리스트링
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/boardscm'+search).then((response) => {
            setData(response.data.content);
            setTot(response.data.totalElements);
            setPageable(response.data.pageable);
        })
    }, [search]);

    const item = (Object.values(data).filter(vo => vo.deleteYn === 'N')).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/scm/${item.uid}`}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return (<>
        <ScmHeader></ScmHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <Paging page={pageable.pageNumber+1} count={tot}/>
    </>);
}

export default Scm;