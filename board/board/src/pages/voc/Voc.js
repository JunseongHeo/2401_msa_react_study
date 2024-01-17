import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import VocHeader from '../../components/VocHeader';
import VocFooter from "../../components/VocFooter";
import {useLocation} from "react-router";

function GetData() {
    const location = useLocation();
    const [data, setData] = useState({});
    const [pageInfo, setPageInfo] = useState({});
    let search = null;

    if(!location.search) {
        search = "?page=0&size=10"
    } else {
        search = location.search;
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BOARD_API}` + "/boards" + search).then((response) => {
            setData(response.data.boards);
            setPageInfo(response.data);
        })
    }, [search]);

    const item = Object.values(data).map((item) => (
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

    sessionStorage.setItem("pageInfo", JSON.stringify(pageInfo));
    return item;


}

function Voc() {
    const item = GetData();

    return (<>
        <VocHeader></VocHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <VocFooter></VocFooter>
    </>);
}

export default Voc;