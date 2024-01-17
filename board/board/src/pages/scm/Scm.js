import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import ScmHeader from '../../components/ScmHeader';
import Paging from '../../pages/scm/ScmPagination';

function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8080/api/boardscm').then((response) => {
            setData(response.data.content);
        })
    }, []);

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

    return item;
}

function Scm() {
    const item = GetData();

    return (<>
        <ScmHeader></ScmHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <Paging page={1} count={item.length}/>
    </>);
}

export default Scm;