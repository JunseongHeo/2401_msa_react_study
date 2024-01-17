import React from "react";
import './ScmPagination.css';
import Pagination from "react-js-pagination";

const Paging = ({page, count, setPage}) => {

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={2}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
};

export default Paging;