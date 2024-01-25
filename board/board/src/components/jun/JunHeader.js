import React from 'react';
import { Link } from 'react-router-dom';
import '../VocHeader.css';

const VocHeader = props => {
    const {headersName, children} = props;

    return (
        <div className="voc-header">
            <h2>Junseong's Board</h2>
            <div className="btn-right">
                <Link to={`/jun/create`}>
                    <button align="right" className="jun-view-go-list-btn">
                        게시글 작성
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default VocHeader;
