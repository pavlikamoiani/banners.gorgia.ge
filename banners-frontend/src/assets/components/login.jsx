import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/userSlice";
import defaultInstance from "../../api/defaultinstance";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await defaultInstance.post("/login", { email, password });
            localStorage.setItem("auth_token", response.data.token);
            dispatch(login({ user: response.data.user, token: response.data.token }));
            console.log("Login successful:", response.data);
            navigate("/filter/branch");
        } catch (error) {
            console.error("Login failed:", error);
            return;
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#06396a]">
            <div className="bg-white rounded-xl shadow-lg flex w-full max-w-4xl overflow-hidden">
                <div className="hidden md:flex flex-col items-center justify-center bg-blue-200 w-1/2 p-10">
                    <img src="/gorgia.png" alt="Logo" className="w-80 max-w-full mb-6" />
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 p-10">
                    <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700 font-medium" htmlFor="email">
                                ელფოსტა
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06396a] transition"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="admin@gmail.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-1 text-gray-700 font-medium" htmlFor="password">
                                პაროლი
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full px-4 py-3 rounded-md bg-blue-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06396a] transition"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#06396a] text-white rounded-md font-semibold text-lg hover:bg-[#195a8d] transition"
                        >
                            შესვლა
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;