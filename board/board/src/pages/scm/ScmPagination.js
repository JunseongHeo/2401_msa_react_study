
import Pagination from "react-js-pagination";
import './ScmPagination.css';
import {useNavigate} from "react-router";

const Paging = ({page, count}) => {
    const navigate = useNavigate();
    const size = 1; // 기본값
    const handlePageChange = (e) => {
        navigate(`/scm?page=`+(e-1)+`&size=`+size);
    }
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={size}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
};

export default Paging;