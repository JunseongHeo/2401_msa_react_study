import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Pagenation from "react-js-pagination";
import "../../components/SH/Paging.css";

import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from "../../components/table/CommonTableColumn";
import CommonTableRow from "../../components/table/CommonTableRow";

function GetData() {
    const [data, setData] = useState({});
    const [currentPage, setcurrentPage] = useState(localStorage.getItem('page')==null?1:Number(localStorage.getItem('page')));
    const [perpage, setperpage] = useState(5);
    const indexOfLast = currentPage * perpage;
    const indexOfFirst = indexOfLast - perpage;
    const handlePageChange = (currentPage) => {
        setcurrentPage(currentPage);
        localStorage.setItem("page", currentPage);
    }
    useEffect(()=> {
        axios.get(process.env.REACT_APP_BOARD + "/api/boards_sh").then((response) => {
            setData(response.data.filter(it => it.deleteYn === 'N'));
        })
    },[]);
    const item = Object.values(data).slice(indexOfFirst,indexOfLast).map((item) => (
        <CommonTableRow key={item.uid}>
            <CommonTableColumn>{item.uid}</CommonTableColumn>
            <CommonTableColumn>
                <Link to={`/board/${item.uid}`}>
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
        <Pagenation
            activePage={currentPage}
            itemsCountPerPage={perpage}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}/>
        <Link to={"/Login"}>
            <button>로그인</button>
        </Link>
    </>);
}


function Board() {
    const item = GetData();

    return (<>
            {item}
    </>);
}
export default Board;