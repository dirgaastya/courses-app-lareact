import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

const Navbar = ({ auth, handleDarkMode }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [isLogin, setIsLogin] = useState(auth.user);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="">
            <nav className="bg-white dark:bg-gray-900 dark:text-white border-b border-gray-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                                <NavLink href={"#"} active={"#"}>
                                    Home
                                </NavLink>
                                <NavLink href={"#"}>About Us</NavLink>
                                <NavLink href={"#"}>Services</NavLink>
                                <NavLink href={"#"}>Pricing</NavLink>
                                <NavLink href={"#"}>Contact</NavLink>
                            </div>
                        </div>

                        <div className="hidden md:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                {isLogin ? (
                                    <div className="flex items-center gap-x-4">
                                        <div>
                                            <NavLink
                                                href={route(
                                                    `${
                                                        auth.role === "user"
                                                            ? "dashboard"
                                                            : "admin-dashboard"
                                                    }`
                                                )}
                                            >
                                                Dashboard
                                            </NavLink>
                                            <NavLink
                                                method="post"
                                                href={route("logout")}
                                                as="button"
                                            >
                                                Log Out
                                            </NavLink>
                                        </div>
                                        <button
                                            onClick={() => {
                                                handleDarkMode(darkMode);
                                                setDarkMode(!darkMode);
                                            }}
                                            className="hidden lg:flex group relative  h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700"
                                        >
                                            {darkMode ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sun hidden dark:block relative transistion m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-600 dark:fill-gray-300 dark:group-hover:fill-yellow-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="moon relative transistion m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:fill-gray-300 dark:group-hover:fill-white dark:hidden"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <NavLink href={route("login")}>
                                            Login
                                        </NavLink>
                                        <NavLink href={route("register")}>
                                            Register
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                asdas
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                asdasd
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
