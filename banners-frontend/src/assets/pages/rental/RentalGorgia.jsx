import React from "react";
import { useState } from "react";
import FilterTable from "../../components/FilterTable";
import Modal from "../../components/Modal";
import { FiPlus } from "react-icons/fi";

const RentalGorgia = () => {
    const columnDefs = [
        { field: "ID", flex: 1 },
        { field: "ფილიალი", flex: 1 },
        { field: "მონტაჟის თარიღი", flex: 1 },
        { field: "დემონტაჟის თარიღი", flex: 1 },
        { field: "სტატუსი", flex: 1 },
        { field: "ტიპი", flex: 1 },
        { field: "სექცია", flex: 1 },
        { field: "ჯამური თანხა", flex: 1 },
        { field: "ანაზღაურების სტატუსი", flex: 1 },
    ];
    const fetchData = async () => [
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalFields = [
        { name: "status", label: "სტატუსი", type: "select", options: [{ value: "active", label: "აქტიური" }, { value: "inactive", label: "არააქტიური" }] },
        { name: "branch", label: "ფილიალი", type: "select", options: [{ value: "gldani", label: "გლდანი" }, { value: "vake", label: "ვაკე" }] },
        { name: "type", label: "ტიპი", type: "select", options: [{ value: "banner", label: "ბანერი" }, { value: "poster", label: "პოსტერი" }] },
        { name: "material", label: "მასალა", type: "select", options: [{ value: "paper", label: "ქაღალდი" }, { value: "plastic", label: "პლასტიკი" }] },
        { name: "size", label: "ზომა", type: "text", placeholder: "ზომა" },
        { name: "mountDate", label: "მონტაჟის თარიღი", type: "date" },
        { name: "section", label: "სექცია", type: "select", options: [{ value: "section1", label: "სექცია 1" }, { value: "section2", label: "სექცია 2" }] },
        { name: "price", label: "ფასი", type: "number", placeholder: "ფასი" },
        { name: "client", label: "კლიენტი", type: "text", placeholder: "კლიენტი" },
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
                    title="ბანერის დამატება"
                    fields={modalFields}
                    onSubmit={values => {
                        setIsModalOpen(false);
                    }}
                />}
                <button
                    className="flex items-center cursor-pointer gap-1 text-white text-[15px] py-2 px-3 rounded-lg shadow-lg transition-all duration-200 mb-3 font-semibold "
                    style={{ background: "#0173b1" }}
                >
                    ყველა დამატება
                </button>
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

export default RentalGorgia;
