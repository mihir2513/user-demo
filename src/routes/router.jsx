/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../layout/Layout";
import PrivateRoute from "../components/PrivateRoute";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import UsersPage from "../pages/UsersPage";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <PrivateRoute Component={Layout} />,
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            {
                path: "/login",
                element: <LoginPage />,
            },
            { path: "/dashboard", element: <PrivateRoute Component={Dashboard} /> },
            { path: "/users", element: <PrivateRoute Component={UsersPage} /> },
            { path: "/profile", element: <PrivateRoute Component={Profile} /> },
        ],
    },
]);

export default router;
