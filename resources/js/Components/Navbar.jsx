import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";
import DarkModeToggle from "@/Components/DarkModeToggle";

const Navbar = ({ auth, handleDarkMode }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const isLogin = auth.user;
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="">
            <nav className="bg-white dark:bg-gray-900 dark:text-white border-b border-gray-600 transition ease-in-out duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                                <NavLink
                                    href={route("welcome")}
                                    active={route().current("welcome")}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href={route("course.list")}
                                    active={route().current("course.list")}
                                >
                                    Course
                                </NavLink>
                                <NavLink href={"#"}>About</NavLink>
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
                                                        auth.user.role ===
                                                        "user"
                                                            ? "dashboard"
                                                            : "admin.index"
                                                    }`
                                                )}
                                            >
                                                Dashboard
                                            </NavLink>
                                            <Link
                                                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:border-blue-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                                method="post"
                                                href={route("logout")}
                                                as="button"
                                            >
                                                Log Out
                                            </Link>
                                        </div>
                                        <DarkModeToggle
                                            handleDarkMode={handleDarkMode}
                                            darkMode={darkMode}
                                            setDarkMode={setDarkMode}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-x-4">
                                        <div>
                                            <NavLink href={route("login")}>
                                                Login
                                            </NavLink>
                                            <NavLink href={route("register")}>
                                                Register
                                            </NavLink>
                                        </div>
                                        <DarkModeToggle
                                            handleDarkMode={handleDarkMode}
                                            darkMode={darkMode}
                                            setDarkMode={setDarkMode}
                                        />
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
