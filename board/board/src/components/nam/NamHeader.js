import React from 'react';
import { Link } from 'react-router-dom';
import './NamHeader.css';

const NamHeader = props => {
    const {headersName, children} = props;

    return (
        <div className="nam-header">
            <h2 aligh="left">Board of NHR</h2>
            <Link to={`/nam/create`}>
                <button align="right" className="nam-view-go-list-btn">
                    게시글 작성
                </button>
            </Link>
        </div>
    )
}

export default NamHeader;
