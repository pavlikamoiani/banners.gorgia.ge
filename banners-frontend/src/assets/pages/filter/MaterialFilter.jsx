import React from "react";
import { useState } from "react";
import FilterTable from "../../components/FilterTable";
import { FiPlus } from "react-icons/fi";
import Modal from "../../components/Modal";
import defaultInstance from "../../../api/defaultinstance";

const MaterialFilter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableKey, setTableKey] = useState(0);
    const columnDefs = [{ field: "მასალა", flex: 1 }];
    const fetchData = async () => {
        const res = await defaultInstance.get("/filters?type=material");
        if (Array.isArray(res.data)) {
            return res.data.map(item => ({
                id: item.id,
                "მასალა": item.name
            }));
        }
        return [];
    };

    const handleAddMaterial = async (value) => {
        try {
            await defaultInstance.post("/filters", { type: "material", name: value });
            setIsModalOpen(false);
            setTableKey(prev => prev + 1);
        } catch (error) {
            console.error("Failed to add material:", error);
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
                მასალის დამატება
            </button>
            {isModalOpen && <Modal
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddMaterial}
                title="მასალის დამატება"
                inputLabel="მასალის დასახელება"
                inputPlaceholder="მასალის დასახელების შეყვანა"
                showInput
            />}
            <FilterTable
                key={tableKey}
                columnDefs={columnDefs}
                fetchData={fetchData}
                onDeleted={() => setTableKey(prev => prev + 1)} // add this
            />
        </div>
    );
};

export default MaterialFilter;
