import React, { useState } from "react";

const Modal = ({
    onClose,
    onSubmit,
    title = "Modal",
    inputLabel = "Input",
    inputPlaceholder = "",
    showInput = false,
    defaultValue = "",
    children,
}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(inputValue);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backdropFilter: "blur(2px)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
        >
            <div className="bg-white rounded-lg shadow-lg p-8 relative flex flex-col justify-center min-w-[420px] min-h-[250px]">
                <button
                    className="absolute top-2 right-3 cursor-pointer text-gray-500 hover:text-gray-800 text-3xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                {children ? (
                    children
                ) : showInput ? (
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2 text-gray-700 font-medium">
                            {inputLabel}
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-md border border-gray-200 mb-4"
                            placeholder={inputPlaceholder}
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#0173b1] cursor-pointer text-white rounded-md font-semibold hover:bg-[#195a8d] transition"
                        >
                            დამატება
                        </button>
                    </form>
                ) : null}
            </div>
        </div>
    );
};

export default Modal;