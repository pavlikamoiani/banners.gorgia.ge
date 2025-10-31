import React from "react";
import { useState } from "react";
import FilterTable from "../../components/FilterTable";
import { FiPlus } from "react-icons/fi";
import Modal from "../../components/Modal";

const Branch = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columnDefs = [{ field: "ფილიალი/ადგილი", flex: 1 }];
    const fetchData = async () => [
    ];

    return (
        <div className="w-full h-[750px] ag-theme-alpine flex flex-col items-end">
            <button
                className="flex items-center cursor-pointer gap-1 text-white text-[15px] py-2 px-3 rounded-lg shadow-lg transition-all duration-200 mb-3 font-semibold "
                style={{ background: "#0173b1" }}
                onClick={() => setIsModalOpen(true)}
            >
                <FiPlus className="text-[16px]" />
                ფილიალის/ადგილის/ქალაქის დამატება
            </button>
            {isModalOpen && <Modal
                onClose={() => setIsModalOpen(false)}
                onSubmit={e => { /* handle value */ }}
                title="ფილიალის/ადგილის დამატება"
                inputLabel="ფილიალის/ადგილის დასახელება"
                inputPlaceholder="დასახელების შეყვანა"
                showInput
            />}
            <FilterTable columnDefs={columnDefs} fetchData={fetchData} />
        </div >
    );
};

export default Branch;
