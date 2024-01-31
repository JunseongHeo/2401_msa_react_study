import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import SBHeader from '../../components/SBHeader';
import SBPagination from './SBPagination';
import {useLocation} from "react-router";

function GetData() {
    const [data, setData] = useState({});
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const pageSection = Math.ceil(page / limit);

    let search = null;
    const location = useLocation();
    if (!location.search) {
        search = "?page=0"
    } else {
        search = location.search;
        console.log("page:"+search.substr(search.indexOf('=')+1));
    }


    useEffect(() => {
        axios.get('http://localhost:8080/api/board_sb').then((response) => {
            setData(response.data);
            console.log("axios: " + page);
        })
        if (sessionStorage.getItem('currentPage') != '1' && sessionStorage.getItem('list') == 'Y') {
            console.log(sessionStorage);
            sessionStorage.removeItem('list');
            setPage(Number(sessionStorage.getItem('currentPage')));
        }
        if (!location.search) {
            setPage(1);
        } else {
            setPage(search.substr(search.indexOf('=')+1));
        }
    }, [search]);

    const item = (Object.values(data).slice(offset, offset + limit)).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/sb/${item.uid}`} onClick={() => {sessionStorage.setItem('list','Y')}}>
                    {item.title}
                </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.insertTime}</CommonTableColumn>
            <CommonTableColumn>{item.writer}</CommonTableColumn>
        </CommonTableRow>
    ));

    return (<>
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {item}
        </CommonTable>
        <footer>
            <SBPagination
                total={Object.values(data).length}
                limit={limit}
                page={page}
                setPage={setPage}
                pageSection={pageSection}
                search={search}
            />
        </footer>
    </>);
}

function SB() {

    const item = GetData();

    return (<>
        <SBHeader></SBHeader>
        {item}
    </>);
}

export default SB;