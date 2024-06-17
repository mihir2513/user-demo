// src/components/Layout.js
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../features/auth/authSlice";

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/users" },
    // Add more navigation items as needed
];

const Layout = () => {
    const [activeNav, setActiveNav] = useState("Dashboard");
    const location = useLocation();
    const isAuthenticated = useSelector(getIsAuthenticated);

    useEffect(() => {
        // Update header based on route
        const path = location.pathname.substring(1);
        setActiveNav(path.charAt(0).toUpperCase() + path.slice(1));
    }, [location]);

    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar navigation={navigation} setActiveNav={setActiveNav} activeNav={activeNav} />
            <main>
                {isAuthenticated && (
                    <header className="font-bold text-white">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight">{activeNav}</h1>
                        </div>
                    </header>
                )}
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
