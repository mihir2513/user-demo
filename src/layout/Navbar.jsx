// src/components/Navbar.js
import {
    Button,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../features/auth/authSlice";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = ({ navigation, setActiveNav, activeNav }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector(getUser);

    const onNavbarClick = (name, href) => {
        setActiveNav(name);
        navigate(href);
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    {/* <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    /> */}
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {isAuthenticated ? (
                                            navigation.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className={classNames(
                                                        item.name === activeNav
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                        "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                                                    )}
                                                    onClick={() => onNavbarClick(item.name, item.href)}
                                                    aria-current={
                                                        item.name === activeNav ? "page" : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </div>
                                            ))
                                        ) : (
                                            <>
                                                <Button
                                                    onClick={() => navigate("/")}
                                                    className="bg-gray-900 text-white rounded-md px-3 py-2 mx-2 text-sm font-medium cursor-pointer"
                                                >
                                                    Home
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {isAuthenticated ? (
                                    <>
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <span className="inline-flex bg-slate-300 size-10 items-center justify-center border-slate-400 border rounded-full">
                                                        <span className="text-slate-800">
                                                            {user?.firstName}
                                                        </span>
                                                    </span>
                                                </MenuButton>
                                            </div>
                                            <Transition
                                                as={React.Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <MenuItems>
                                                        {({ active }) => (
                                                            <div
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                                                )}
                                                                onClick={() => onNavbarClick("profile","/profile")}
                                                            >
                                                                Your Profile
                                                            </div>
                                                        )}
                                                    </MenuItems>
                                                    {/* <MenuItems>
                                                        {({ active }) => (
                                                            <div
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                                                )}
                                                            >
                                                                Settings
                                                            </div>
                                                        )}
                                                    </MenuItems> */}
                                                    <MenuItems>
                                                        {({ active }) => (
                                                            <div
                                                                className={classNames(
                                                                    active ? "bg-gray-100" : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                                                )}
                                                                onClick={() => {
                                                                    dispatch(logout());
                                                                }}
                                                            >
                                                                Sign out
                                                            </div>
                                                        )}
                                                    </MenuItems>
                                                </MenuItems>
                                            </Transition>
                                        </Menu>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={() => navigate("/login")}
                                            className="bg-gray-900 text-white rounded-md px-3 py-2 mx-2 text-sm font-medium cursor-pointer"
                                        >
                                            Login
                                        </Button>
                                        <Button
                                            // to="/signup"
                                            className="bg-gray-900 text-white rounded-md px-3 py-2 mx-2 text-sm font-medium cursor-pointer"
                                        >
                                            Sign Up
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="div"
                                    onClick={() => onNavbarClick(item.name)}
                                    className={classNames(
                                        item.name === activeNav
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                                    )}
                                    aria-current={item.name === activeNav ? "page" : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};

Navbar.propTypes = {
    navigation: PropTypes.array.isRequired,
    activeNav: PropTypes.string.isRequired,
    setActiveNav: PropTypes.func.isRequired,
};

export default Navbar;
