import React from 'react';

const CommonTableRow = ({ children }) => {
    return (
        <tr className="common-table-column">
            {
                children
            }
        </tr>
    )
}

export default CommonTableRow;