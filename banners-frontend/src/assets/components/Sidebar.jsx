"use client"

import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEasel2Fill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa6";
import { TbMessageReportFilled } from "react-icons/tb";
import { IoExit } from "react-icons/io5";
import defaultInstance from "../../api/defaultinstance";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const [expandedMenus, setExpandedMenus] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await defaultInstance.post("/logout");
            localStorage.removeItem("auth_token");
            dispatch(logout());
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
            return;
        }
    }

    const sidebarColumns = [
        { icon: <FaFilter />, label: "ფილტრი", route: "/filter", subItems: [{ label: "ფილიალი/ადგილი", route: "/filter/branch" }, { label: "ტიპი", route: "/filter/type" }, { label: "მასალა", route: "/filter/material" }, { label: "სექცია", route: "/filter/section" }] },
        { icon: <BsFillEasel2Fill />, label: "იჯარა", route: "/rental", subItems: [{ label: "გორგიას ბანერები", route: "/rental/gorgia" }, { label: "ნაქირავები ბანერები", route: "/rental/leased" }, { label: "ფართები", route: "/rental/spaces" }, { label: "დისტრიბუცია", route: "/rental/distribution" }] },
        { icon: <TbMessageReportFilled />, label: "რეპორტი", route: "/report", subItems: [{ label: "ბანერების მოიჯარეები", route: "/report/banner" }, { label: "ფართების მოიჯარეები", route: "/report/spaces" }, { label: "ნაქირავები ბანერები", route: "/report/leased" }] },
        { icon: <IoExit />, label: "გასვლა", route: "/logout" },
    ]

    const toggleMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
        setExpandedMenus(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity" onClick={onClose} />}

            <aside
                className={`fixed top-0 left-0 h-full bg-[#0173b1] text-white z-40 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
                style={{ width: isCollapsed ? "5.8rem" : "16rem" }}
            >
                <button
                    onClick={onToggleCollapse}
                    className="hidden lg:flex absolute -right-3 top-8 w-6 h-6 bg-white text-[#0173b1] rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-50 cursor-pointer"
                    aria-label={isCollapsed ? "Развернуть sidebar" : "Свернуть sidebar"}
                >
                    <svg
                        className={`w-4 h-4 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="p-6 border-b border-white/20">
                    <div
                        className={`w-full bg-white/10 rounded-lg flex items-center justify-center transition-all  ${isCollapsed ? "h-10" : "h-20"
                            }`}
                    >
                        {isCollapsed ? (
                            <img src="/logo.png" className="h-7 w-7" />
                        ) : (
                            <img src="/gorgia.png" className="p-3" />
                        )}
                    </div>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {sidebarColumns.map((item, index) => (
                            <li key={index} >
                                {item.label === "გასვლა" ? (
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors group w-full text-left"
                                        title={isCollapsed ? item.label : undefined}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {!isCollapsed && (
                                            <span className="font-medium group-hover:translate-x-1 transition-transform">{item.label}</span>
                                        )}
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => toggleMenu(index)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors group w-full text-left"
                                            title={isCollapsed ? item.label : undefined}
                                        >
                                            <span className="text-xl">{item.icon}</span>
                                            {!isCollapsed && (
                                                <span className="font-medium group-hover:translate-x-1 transition-transform">{item.label}</span>
                                            )}
                                        </button>
                                        {item.subItems && !isCollapsed && (
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedMenus[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <ul className="ml-8 mt-2 space-y-1">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link to={subItem.route} className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition-colors text-sm w-full text-left">
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {!isCollapsed && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
                        <p className="text-xs opacity-60 text-center">© 2025 Banner Site</p>
                    </div>
                )}
            </aside>
        </>
    )
}