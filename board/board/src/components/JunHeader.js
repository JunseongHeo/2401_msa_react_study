import React from 'react';
import { Link } from 'react-router-dom';
import './VocHeader.css';

const VocHeader = props => {
    const {headersName, children} = props;

    return (
        <div className="voc-header">
            <h2 aligh="left">Q/A</h2>
            <Link to={`/jun/create`}>
                <button align="right" className="jun-view-go-list-btn">
                    게시글 작성_준성
                </button>
            </Link>
        </div>
    )
}

export default VocHeader;
