import React, { useEffect, useState } from "react";
import TableWrapper from "./TableWrapper";

const FilterTable = ({ columnDefs, fetchData, onDeleted, ...props }) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetchData().then(setRowData);
    }, [fetchData]);

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <TableWrapper
                rowData={rowData}
                columnDefs={columnDefs}
                onDeleted={onDeleted}
                {...props}
            />
        </div>
    );
};

export default FilterTable;