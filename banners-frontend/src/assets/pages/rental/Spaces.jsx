import React from "react";
import FilterTable from "../../components/FilterTable";

const Spaces = () => {
    const columnDefs = [
        { field: "ID", flex: 1 },
        { field: "მისამართი", flex: 1 },
        { field: "ადგილი", flex: 1 },
        { field: "ფასი 1 კვ.მ", flex: 1 },
        { field: "მოიჯარე", flex: 1 },
        { field: "სტატუსი", flex: 1 },
        { field: "ჯამური თანხა", flex: 1 },
    ];
    const fetchData = async () => [
    ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div>
    );
};

export default Spaces;
