import React from 'react';
import { Link } from 'react-router-dom';
import './SBHeader.css';

const SBHeader = props => {
    const {headersName, children} = props;

    return (
        <div className="sb-header">
            <h2 aligh="left">SB Board</h2>
            <Link to={`/sb/create`}>
                <button align="right" className="sb-view-go-list-btn">
                    게시글 작성
                </button>
            </Link>
        </div>
    )
}

export default SBHeader;
