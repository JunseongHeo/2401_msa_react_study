import React, {useEffect, useState} from 'react';
import './CommonTable.css';

const CommonTable = props => {
    const { headersName, children} = props;
    const [headersWidth, setHeadersWidth] = useState([]);

    useEffect(() => {
        if (props.headersWidth !== undefined) {
            setHeadersWidth(props.headersWidth);
        }
    }, [props.headersWidth]);

    return (
        <table className="common-table">
            <colgroup>
                {
                    headersWidth.map((item, index) => {
                        return (
                            <col width={item} key={index}/>
                        )
                    })
                }
            </colgroup>
            <thead>
            <tr>
                {
                    headersName.map((item, index) => {
                        return (
                            <td className="common-table-header-column" key={index}>{ item }</td>
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                children
            }
            </tbody>
        </table>
    )
}

export default CommonTable;