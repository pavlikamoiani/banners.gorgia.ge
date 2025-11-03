import React, { useState } from "react";
import FilterTable from "../../components/FilterTable";
import Modal from "../../components/Modal";
import { FiPlus } from "react-icons/fi";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalFields = [
        { name: "address", label: "მისამართი", type: "text", placeholder: "მისამართი" },
        { name: "location", label: "ადგილი", type: "select", options: [{ value: "gldani", label: "გლდანი" }, { value: "vake", label: "ვაკე" }] },
        { name: "price", label: "ფასი/კვ.მ", type: "number", placeholder: "ფასი" },
        { name: "valuta", label: "ვალუტა", type: "select", options: [{ value: "$", label: "$" }, { value: "₾", label: "₾" }] },
        { name: "size", label: "ზომა/კვ.მ", type: "text", placeholder: "ზომა" },
        { name: "file", label: "ფოტო", type: "file" },
    ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine flex flex-col items-end">
            <div className="flex gap-3">
                <button
                    className="flex items-center cursor-pointer gap-1 text-white text-[15px] py-2 px-3 rounded-lg shadow-lg transition-all duration-200 mb-3 font-semibold "
                    style={{ background: "#0173b1" }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <FiPlus className="text-[16px]" />
                    ბანერის დამატება
                </button>
                {isModalOpen && <Modal
                    onClose={() => setIsModalOpen(false)}
                    title="ფილიალი/ადგილის დასახელება"
                    fields={modalFields}
                />}
                <button
                    className="flex items-center cursor-pointer gap-1 text-white text-[15px] py-2 px-3 rounded-lg shadow-lg transition-all duration-200 mb-3 font-semibold "
                    style={{ background: "#0173b1" }}
                >
                    ვადა გასდის
                </button>
            </div>
            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div>
    );
};

export default Spaces;
