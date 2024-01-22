import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import NamHeader from '../../components/NamHeader';
import NamPaging from './NamPaging';

function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        // 'http://localhost:8080/nam/boards_nam'
        axios.get(`${process.env.REACT_APP_BOARD_API}`+'/boards_nam').then((response) => {
            setData(response.data.data);
            console.log(response.data);
        })
    }, []);

    //.filter(vo => vo.deleteYn === 'N')
    const item = (Object.values(data)).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/nam/${item.uid}`}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return item;
}

function Nam() {
    const item = GetData();

    return (<>
        <NamHeader></NamHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <NamPaging></NamPaging>
    </>);
}

export default Nam;