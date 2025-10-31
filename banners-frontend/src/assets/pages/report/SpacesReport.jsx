import React from "react";
import FilterTable from "../../components/FilterTable";

const SpacesReport = () => {
    const columnDefs = [
        { field: "ID", flex: 1 },
        { field: "მოიჯარე", flex: 1 },
        { field: "თვე", flex: 1 },
        { field: "წელი", flex: 1 },
        { field: "სტატუსი", flex: 1 },
        { field: "სრული თანხა", flex: 1 },
        { field: "ჯამური ჩარიცხვა", flex: 1 },
        { field: "ჯამური დავალიანება", flex: 1 },
    ];
    const fetchData = async () => [
    ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div>
    );
};

export default SpacesReport;
