import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import VocHeader from '../../components/VocHeader';

function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8080/api/boards').then((response) => {
            setData(response.data);
        })
    }, []);

    const item = (Object.values(data).filter(vo => vo.deleteYn === 'N')).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/voc/${item.uid}`}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return item;
}

function Voc() {
    const item = GetData();

    return (<>
        <VocHeader></VocHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
    </>);
}

export default Voc;