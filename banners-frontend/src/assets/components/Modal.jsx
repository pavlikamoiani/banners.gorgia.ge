import React, { useState } from "react";

const Modal = ({
    onClose,
    onSubmit,
    title = "Modal",
    fields = [],
    children,
}) => {
    const [formValues, setFormValues] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue || "" }), {})
    );

    const handleChange = (e, name) => {
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formValues);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backdropFilter: "blur(2px)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
        >
            <div className="bg-white rounded-lg shadow-lg p-8 relative flex flex-col justify-center min-w-[600px] max-w-[650px] w-full">
                <button
                    className="absolute top-2 right-3 cursor-pointer text-gray-500 hover:text-gray-800 text-3xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
                {children ? (
                    children
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {fields.map(field => (
                            <div
                                key={field.name}
                                className="flex flex-col"
                            >
                                <label className="block mb-2 text-gray-700 font-medium">
                                    {field.label}
                                </label>
                                {field.type === "select" ? (
                                    <select
                                        className="w-full px-4 py-2 rounded-md border border-gray-200"
                                        value={formValues[field.name]}
                                        onChange={e => handleChange(e, field.name)}
                                    >
                                        <option value="">აირჩიეთ</option>
                                        {field.options && field.options.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                ) : field.type === "file" ? (
                                    <input
                                        type="file"
                                        className="w-full"
                                        onChange={e => handleChange(e, field.name)}
                                    />
                                ) : (
                                    <input
                                        type={field.type || "text"}
                                        className="w-full px-4 py-2 rounded-md border border-gray-200"
                                        placeholder={field.placeholder || ""}
                                        value={formValues[field.name]}
                                        onChange={e => handleChange(e, field.name)}
                                    />
                                )}
                            </div>
                        ))}
                        <div className="col-span-2">
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#0173b1] cursor-pointer text-white rounded-md font-semibold hover:bg-[#195a8d] transition"
                            >
                                დამატება
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Modal;