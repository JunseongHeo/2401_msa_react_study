import React from 'react';
import { Link } from 'react-router-dom';
import './ScmHeader.css';

const ScmHeader = props => {
    const {headersName, children} = props;

    return (
        <div className="scm-header">
            <h2 aligh="center">SCM 게시판</h2>
            <div className="btn-right">
                <Link to={`/scm/create`}>
                    <button className="scm-view-go-list-btn">
                        게시글 작성
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ScmHeader;
