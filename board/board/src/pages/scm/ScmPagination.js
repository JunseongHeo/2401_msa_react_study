
import Pagination from "react-js-pagination";
import './ScmPagination.css';
import {useNavigate} from "react-router";

const Paging = ({page, tot}) => {
    const navigate = useNavigate();
    const size = 1; // 기본값
    const handlePageChange = (e) => {
        navigate(`/scm?page=`+(e-1)+`&size=`+size);
        // useNavigate() : 페이지를 이동하면서 값을 전달 ("/페이지 주소", { state: { 키: 값 } } )
    }
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={size}
            totalItemsCount={tot}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
};

export default Paging;