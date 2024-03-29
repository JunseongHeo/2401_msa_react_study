import styled from "styled-components";
import {useNavigate} from "react-router";

function SBPagination({ total, limit, page, setPage, pageSection, search }) {
    const navigate = useNavigate();
    const numPages = Math.ceil(total / limit);
    const startPage = ( pageSection * 10 ) - 9;
    const endPage = ( pageSection * 10 ) < numPages ? ( pageSection * 10 ) : numPages;
    const numArr = total == 0 ? 0 : endPage - startPage + 1 < 10 ? endPage - startPage + 1 : 10;

    return (
        <Nav>
            <Button
                onClick={() => {
                    sessionStorage.setItem('currentPage', startPage - 1);
                    setPage(startPage - 1);
                    navigate('/sb?page='+ (startPage - 1));
                }}
                disabled={startPage == 1}
            >
                &lt;
            </Button>
            {Array(numArr)
                .fill()
                .map((_, i) => (
                    <Button
                        key={startPage + i}
                        onClick={() => {
                            sessionStorage.setItem('currentPage', startPage + i);
                            setPage(startPage + i);
                            navigate('/sb?page='+ (startPage + i));
                        }}
                        aria-current={page == startPage + i? "page" : undefined}
                    >
                        {startPage + i}
                    </Button>
                ))
            }
            <Button
                onClick={() => {
                    sessionStorage.setItem('currentPage', endPage + 1);
                    setPage(endPage + 1);
                    navigate('/sb?page='+ (endPage + 1));
                }}
                disabled={endPage == numPages}
            >
                &gt;
            </Button>
        </Nav>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default SBPagination;