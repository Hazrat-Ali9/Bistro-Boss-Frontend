import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
    FaBars,
    FaHome,
    FaShoppingCart,
    FaSignOutAlt,
    FaUser,
    FaTimes,
    FaSearch,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Dashboard = () => {
    const { logOut } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Log Out",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire("Logged Out", "You have successfully logged out.", "success");
                    })
                    .catch((error) => {
                        Swal.fire("Error", error.message, "error");
                    });
            }
        });
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:flex md:flex-col`}
            >
                <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
                    <span className="text-lg font-bold uppercase">Bistro Boss</span>
                    <button
                        className="text-white md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-4 py-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center px-4 py-3 text-yellow-500 bg-gray-700 rounded-lg"
                                    : "flex items-center px-4 py-3 text-gray-300 hover:text-yellow-500 hover:bg-gray-700 rounded-lg"
                            }
                        >
                            <FaHome className="h-5 w-5 mr-3" />
                            Go To Home
                        </NavLink>
                        <NavLink
                            to="/dashboard/carts"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center px-4 py-3 mt-3 text-yellow-500 bg-gray-700 rounded-lg"
                                    : "flex items-center px-4 py-3 mt-3 text-gray-300 hover:text-yellow-500 hover:bg-gray-700 rounded-lg"
                            }
                        >
                            <FaShoppingCart className="h-5 w-5 mr-3" />
                            Carts
                        </NavLink>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center px-4 py-3 mt-3 text-yellow-500 bg-gray-700 rounded-lg"
                                    : "flex items-center px-4 py-3 mt-3 text-gray-300 hover:text-yellow-500 hover:bg-gray-700 rounded-lg"
                            }
                        >
                            <FaUser className="h-5 w-5 mr-3" />
                            Your Profile
                        </NavLink>
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-3 mt-3 text-gray-300 hover:text-yellow-500 hover:bg-gray-700 rounded-lg w-full"
                        >
                            <FaSignOutAlt className="h-5 w-5 mr-3" />
                            Logout
                        </button>
                        <div className="mt-6 border-t border-gray-700 pt-4">
                            <NavLink
                                to="/order"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center px-4 py-3 text-yellow-500 bg-gray-700 rounded-lg"
                                        : "flex items-center px-4 py-3 text-gray-300 hover:text-yellow-500 hover:bg-gray-700 rounded-lg"
                                }
                            >
                                <FaSearch className="h-5 w-5 mr-3" />
                                Menu Items
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 h-screen overflow-hidden">
                {/* Top Navbar */}
                <div className="flex items-center justify-center h-16 bg-white shadow px-4">
                    <button
                        className="text-gray-700 md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FaBars className="h-6 w-6" />
                    </button>
                    <input
                        className="w-full max-w-lg px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {/* Content Area */}
                <div className="md:ml-64 overflow-y-auto bg-gray-50 h-[calc(100vh-64px)]">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
