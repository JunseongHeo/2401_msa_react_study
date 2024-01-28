import Pagination from "react-js-pagination";
import './NamView.css';
import {useNavigate} from "react-router";

const NamPaging = ({pageCurrent,pageTotal}) => {
    const navigate = useNavigate();
    const size = 5;
    const handlePageChange = (e) => {
        navigate(`/nam?page=` + (e - 1) + `&size=` + size);
        // useNavigate() : 페이지 이동하며 값 전달 ("/페이지 주소", {state: {key:valule} } )
    }

    return (
        <Pagination
            activePage={pageCurrent}
            itemsCountPerPage={size}
            totalItemsCount={pageTotal}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
        />
    )
}

export default NamPaging;