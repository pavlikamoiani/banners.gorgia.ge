import React from "react";
import { useState } from "react";
import FilterTable from "../../components/FilterTable";
import { FiPlus } from "react-icons/fi";
import Modal from "../../components/Modal";
import defaultInstance from "../../../api/defaultinstance";

const SectionFilter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableKey, setTableKey] = useState(0);
    const columnDefs = [{ field: "სექცია", flex: 1 }];
    const fetchData = async () => {
        const res = await defaultInstance.get("/filters?type=section");
        if (Array.isArray(res.data)) {
            return res.data.map(item => ({
                id: item.id,
                "სექცია": item.name
            }));
        }
        return [];
    };

    const handleAddSection = async (value) => {
        try {
            await defaultInstance.post("/filters", { type: "section", name: value });
            setIsModalOpen(false);
            setTableKey(prev => prev + 1);
        } catch (error) {
            console.error("Failed to add section:", error);
            return;
        }
    };

    return (
        <div className="w-full h-[750px] ag-theme-alpine flex flex-col items-end">
            <button
                className="flex items-center cursor-pointer gap-1 text-white text-[15px] py-2 px-3 rounded-lg shadow-lg transition-all duration-200 mb-3 font-semibold "
                style={{ background: "#0173b1" }}
                onClick={() => setIsModalOpen(true)}
            >
                <FiPlus className="text-[16px]" />
                სექციის დამატება
            </button>
            {isModalOpen && <Modal
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddSection}
                title="სექციის დამატება"
                inputLabel="სექციის დასახელება"
                inputPlaceholder="სექციის დასახელების შეყვანა"
                showInput
            />}
            <FilterTable
                key={tableKey}
                columnDefs={columnDefs}
                fetchData={fetchData}
                onDeleted={() => setTableKey(prev => prev + 1)}
            />
        </div>
    );
};

export default SectionFilter;
