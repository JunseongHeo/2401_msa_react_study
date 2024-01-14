import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import JunHeader from '../../components/JunHeader';

function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('/api/junboards').then((response) => {
            setData(response.data);
        })
    }, []);

    const item = (Object.values(data).filter(vo => vo.deleteYn === 'N')).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/jun/${item.uid}`}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return item;
}

function Jun() {
    const item = GetData();

    return (<>
        <JunHeader></JunHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
    </>);
}

export default Jun;