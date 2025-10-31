import React from "react";
import FilterTable from "../../components/FilterTable";

const Distribution = () => {
    const columnDefs = [
        { field: "ID", flex: 1 },
        { field: "ქალაქი", flex: 1 },
        { field: "მონტაჟის თარიღი", flex: 1 },
        { field: "დემონტაჟის თარიღი", flex: 1 },
        { field: "ტიპი", flex: 1 },
        { field: "ჯამური თანხა", flex: 1 },
        { field: "ანაზღაურების სტატუსი", flex: 1 },
    ];
    const fetchData = async () => [
    ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div>
    );
};

export default Distribution;
