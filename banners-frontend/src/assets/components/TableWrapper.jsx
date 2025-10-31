import React from "react";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";

const myTheme = themeQuartz.withParams({
    spacing: 10,
    foregroundColor: "rgb(20, 40, 60)",
    backgroundColor: "rgb(243, 249, 255)",
    headerBackgroundColor: "#0173b1",
    headerTextColor: "white",
    rowHoverColor: "rgb(227, 242, 255)",
    borderColor: "rgb(210, 225, 240)",
    selectedRowColor: "rgb(200, 230, 250)",
});

const defaultPagination = true;
const defaultPageSize = 25;
const defaultPageSizeSelector = [25, 50, 100];

const getRowStyle = params => ({
    background: params.node.rowIndex % 2 === 0 ? "#e4edfa" : "#f1f7ff",
    width: "100%",
});

const TableWrapper = ({
    rowData,
    columnDefs,
    onDelete,
    pagination = defaultPagination,
    paginationPageSize = defaultPageSize,
    paginationPageSizeSelector = defaultPageSizeSelector,
    ...props
}) => {
    const hasAction = columnDefs.some(col => col.field === "მოქმედება");
    const enhancedColDefs = hasAction
        ? columnDefs
        : [
            ...columnDefs,
            {
                field: "მოქმედება",
                headerName: "მოქმედება",
                flex: 1,
                cellStyle: {
                    display: "flex",
                    alignItems: "center",
                },
                cellRenderer: params => (
                    <button
                        style={{
                            background: "linear-gradient(90deg, #e53935 0%, #ff6f60 100%)",
                            display: "flex",
                            alignItems: "center",
                            height: "32px",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            padding: "0px 18px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            boxShadow: "0 2px 8px rgba(229,57,53,0.15)",
                            transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
                        }}
                        onClick={() => onDelete && onDelete(params)}
                    >
                        წაშლა
                    </button>
                )
            }
        ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine">
            <AgGridReact
                rowData={rowData}
                columnDefs={enhancedColDefs}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                paginationPageSizeSelector={paginationPageSizeSelector}
                theme={myTheme}
                getRowStyle={getRowStyle}
                {...props}
            />
        </div>
    );
}

export default TableWrapper;