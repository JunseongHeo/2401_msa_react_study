import React from 'react';
import { Link } from 'react-router-dom';
import './VocHeader.css';
import {useNavigate} from "react-router";

const VocHeader = props => {
    const navigate = useNavigate();
    function setCountPerPage(e) {
        navigate(`/voc?page=0&size=` + e.target.value);
    }

    return (
        <div className="voc-header">
            <h2 aligh="left">Q/A</h2>
            <Link to={`/voc/create`}>
                <button align="right" className="voc-view-go-list-btn">
                    게시글 작성
                </button>
            </Link>
            <select className="right" id="countPerPage" onChange={(e) => setCountPerPage(e)}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>
        </div>
    )
}

export default VocHeader;
