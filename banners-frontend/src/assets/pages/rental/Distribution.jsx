import React from "react";
import { useState } from "react";
import FilterTable from "../../components/FilterTable";
import Modal from "../../components/Modal";
import { FiPlus } from "react-icons/fi";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalFields = [
        { name: "city", label: "ქალაქი", type: "select", options: [{ value: "gldani", label: "გლდანი" }, { value: "vake", label: "ვაკე" }] },
        { name: "type", label: "ტიპი", type: "select", options: [{ value: "banner", label: "ბანერი" }, { value: "poster", label: "პოსტერი" }] },
        { name: "material", label: "მასალა", type: "text", placeholder: "მასალა" },
        { name: "size", label: "ზომა", type: "text", placeholder: "ზომა" },
        { name: "address", label: "მისამართი", type: "text", placeholder: "მისამართი" },
        { name: "price", label: "ფასი", type: "number", placeholder: "ფასი" },
        { name: "valuta", label: "ვალუტა", type: "select", options: [{ value: "$", label: "$" }, { value: "₾", label: "₾" }] },
        { name: "file", label: "ფაილი", type: "file" },

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
            </div>            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div>
    );
};

export default Distribution;
