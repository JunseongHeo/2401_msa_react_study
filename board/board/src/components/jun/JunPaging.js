import './JunPaging.css'
import Pagination from "react-js-pagination";
import {useNavigate} from "react-router";

const JunPaging = ({pageCurrent, pageTotal}) => {
    const navigate = useNavigate();
    const handlePageChange = (e) => {
        navigate(`/jun?page=` + (e-1) + `&size=` + 5);
    }

    return (
        <Pagination
            activePage={pageCurrent}
            itemsCountPerPage={5}
            totalItemsCount={pageTotal}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    )
}

export default JunPaging;
