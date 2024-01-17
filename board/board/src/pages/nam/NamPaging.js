import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './NamView.css'

function GetData() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BOARD_API}`+'/boards_nam').then((response) => {
            setData(response.data.totalPages);
        })
    }, []);

    const item = (Object.values(data)).map((item) => (
        <li>
            <Link to={`/nam/${item.totalPages}`}>
                {item.totalPages}
            </Link>
        </li>
    ));

    return item;
}

function NamPaging() {
    const item = GetData();

    console.log(item);

    return (<>
        <ul>{item}</ul>
    </>);
}

export default NamPaging;