import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import defaultInstance from "../../api/defaultinstance";

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
    onDeleted,
    pagination = defaultPagination,
    paginationPageSize = defaultPageSize,
    paginationPageSizeSelector = defaultPageSizeSelector,
    ...props
}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteParams, setDeleteParams] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Animate modal mount/unmount
    useEffect(() => {
        if (confirmOpen) {
            setShowModal(true);
        } else {
            const timeout = setTimeout(() => setShowModal(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [confirmOpen]);

    const hasAction = columnDefs.some(col => col.field === "მოქმედება");

    const handleDeleteClick = (params) => {
        setDeleteParams(params);
        setConfirmOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!deleteParams) return;
        try {
            await defaultInstance.delete(`/filters/${deleteParams.data.id}`);
            if (onDeleted) onDeleted();
        } catch (error) {
            console.error("Error deleting filter:", error);
        }
        setConfirmOpen(false);
        setDeleteParams(null);
    };

    const handleCancelDelete = () => {
        setConfirmOpen(false);
        setDeleteParams(null);
    };

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
                    justifyContent: "center",
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
                            borderRadius: "8px",
                            padding: "0px 22px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "15px",
                            boxShadow: "0 2px 8px rgba(229,57,53,0.15)",
                            transition: "background 0.2s, box-shadow 0.2s, transform 0.1s",
                            letterSpacing: "0.5px"
                        }}
                        onClick={() => handleDeleteClick(params)}
                    >
                        წაშლა
                    </button>
                )
            }
        ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine relative">
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
            {showModal && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300
                        ${confirmOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                    `}
                    style={{
                        backdropFilter: "blur(2px)",
                        backgroundColor: "rgba(0,0,0,0.25)"
                    }}
                >
                    <div
                        className={`
                            bg-white rounded-xl shadow-2xl p-8 min-w-[350px] flex flex-col items-center relative
                            transition-all duration-300
                            ${confirmOpen
                                ? "animate-modal-in"
                                : "animate-modal-out pointer-events-none"
                            }
                        `}
                        style={{
                            transformOrigin: "center"
                        }}
                    >
                        <div className="mb-4 flex flex-col items-center">
                            <span className="text-red-500 text-4xl mb-2 animate-bounce">🗑️</span>
                            <h2 className="text-lg font-semibold mb-2 text-gray-800">დასტური წაშლაზე</h2>
                            <p className="text-gray-600 text-center">დარწმუნებული ხართ, რომ გსურთ ამ ჩანაწერის წაშლა?</p>
                        </div>
                        <div className="flex gap-4 mt-6 w-full">
                            <button
                                className="flex-1 py-2 rounded-md bg-gray-100 text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 transition"
                                onClick={handleCancelDelete}
                            >
                                გაუქმება
                            </button>
                            <button
                                className="flex-1 py-2 rounded-md bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-600 transition"
                                onClick={handleConfirmDelete}
                            >
                                წაშლა
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TableWrapper;

/* Add these styles to your global CSS (e.g., index.css or tailwind.css):

@keyframes modal-in {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(40px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes modal-out {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.85) translateY(40px);
  }
}
.animate-modal-in {
  animation: modal-in 0.3s cubic-bezier(.4,0,.2,1) forwards;
}
.animate-modal-out {
  animation: modal-out 0.3s cubic-bezier(.4,0,.2,1) forwards;
}
*/