import React from "react";
import './VocFooter.css'
import Pagination from "react-js-pagination";
import {useNavigate} from "react-router";

const VocFooter = () => {

    const navigate = useNavigate();
    const pageInfo = JSON.parse(sessionStorage.getItem("pageInfo"));
    const handlePageChange = (e) => {
        navigate(`/voc?page=` + (e-1) + `&size=` + pageInfo.pageable.pageSize);
        /*window.location.href = "/voc?page=" + (e-1) + "&size=" + pageInfo.pageable.pageSize*/
    }

        //const rendering = () => {
        return (
            //npm install react-js-pagination
            //페이징 라이브러리
            <div className="paging_wrap">
                <Pagination
                    //현재 보고있는 페이지
                    activePage={pageInfo.pageable?.pageNumber + 1}
                    //페이지당 항목 수
                    itemsCountPerPage={pageInfo.pageable?.pageSize}
                    //전체 총 리스트 수
                    totalItemsCount={pageInfo.totalElements}
                    //표시할 페이지수
                    pageRangeDisplayed={10}
                    //<ul> 태그 의 클래스 이름
                    innerClass={"paging"}
                    //이전 페이지 탐색 버튼의 텍스트
                    prevPageText={"이전"}
                    //다음 페이지 탐색 버튼의 텍스트
                    nextPageText={"다음"}
                    //탐색 버튼 숨기기(이전 페이지, 다음 페이지)
                    /*hideNavigation={true}
                    //첫 번째/마지막 탐색 버튼 숨기기
                    hideFirstLastPages={true}*/
                    onChange={handlePageChange}>
                </Pagination>
            </div>

        )
           /* const page = [];
           )
            //이전 페이지 존재유무 확인
            if(pageInfo.hasPrevios) {
                page.push(<li><Link to={`/voc?page=${pageInfo.previousPageable.pageNumber}`}>이전</Link></li>)
            }
            for (let i = 0; i < pageInfo.totalPages; i++) {
                page.push(<li><Link to={`/voc?page=${i}`}>{i+1}</Link></li>)
            }
            //다음 페이지 존재유무 확인
            if(pageInfo.hasNext) {
                page.push(<li><Link to={`/voc?page=${pageInfo.nextPageable.pageNumber}`}>다음</Link></li>)
            }
            return page*/
       // }

        /*return <div className="paging_wrap"><ul className="paging">{rendering()}</ul></div>;*/

}

export default VocFooter;
