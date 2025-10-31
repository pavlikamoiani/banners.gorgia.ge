import React from "react";
import FilterTable from "../../components/FilterTable";

const MaterialFilter = () => {
    const columnDefs = [{ field: "მასალა", flex: 1 }];
    const fetchData = async () => [

    ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div>
    );
};

export default MaterialFilter;
