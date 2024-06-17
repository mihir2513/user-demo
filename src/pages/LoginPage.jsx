import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import BackdropLoader from "../components/BackdropLoader";
import { getIsAuthenticated, getLoading, getLoginError } from "../features/auth/authSlice";
import { login } from "../services/authService";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loading = useSelector(getLoading);
    const isAuthenticated = useSelector(getIsAuthenticated);
    const error = useSelector(getLoginError);

    const handleLogin = async (e) => {
        e.preventDefault();
        await dispatch(login({ email, password }));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="flex items-center justify-center  text-white">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                type="email"
                                id="email"
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                            <input
                                type="password"
                                id="password"
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        {/* <SwitchGroup as="div" className="flex items-center">
                            <Switch
                                checked={rememberMe}
                                onChange={setRememberMe}
                                className={`${rememberMe ? "bg-blue-600" : "bg-gray-600"}
                                    relative inline-flex items-center h-6 rounded-full w-11`}
                            >
                                <span
                                    className={`${rememberMe ? "translate-x-6" : "translate-x-1"}
                                        inline-block w-4 h-4 transform bg-white rounded-full`}
                                />
                            </Switch>
                            {/* <Switch.Label className="ml-3 text-sm">Remember me</Switch.Label> */}
                        {/* </SwitchGroup> */}
                        {/* <div>
                            <a href="#" className="text-sm text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div> */}
                    </div>
                    {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <BackdropLoader loading={loading}/>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
