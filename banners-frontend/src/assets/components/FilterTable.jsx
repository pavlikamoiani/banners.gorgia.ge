import React, { useEffect, useState } from "react";
import TableWrapper from "./TableWrapper";

const FilterTable = ({ columnDefs, fetchData }) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetchData().then(setRowData);
    }, [fetchData]);

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <TableWrapper rowData={rowData} columnDefs={columnDefs} />
        </div>
    );
};

export default FilterTable;