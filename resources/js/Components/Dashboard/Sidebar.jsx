import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineRead,
    AiOutlineBars,
    AiOutlineUser,
    AiOutlineCreditCard,
} from "react-icons/ai";
import SideNavLink from "@/Components/Dashboard/SideNavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

const Sidebar = ({ auth }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <>
            <nav
                className={`w-full lg:w-24 ${
                    showingNavigationDropdown ? "block" : "flex"
                } justify-between lg:flex-col lg:justify-start items-center bg-white dark:bg-gray-800 py-2 px-4 md:px-6 lg:px-8 lg:py-4 transition duration-500 ease-in-out`}
            >
                <a
                    href="/"
                    className="hidden md:flex md:gap-x-2 md:flex-col md:items-center"
                >
                    <img
                        src="/Assets/logo.png"
                        alt="logo"
                        className="h-5 w-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    />
                    <span className="text-sm font-semibold mt-1 md:mt-2">
                        Hesecourse
                    </span>
                </a>

                <ul
                    className={`${
                        showingNavigationDropdown ? "hidden" : "flex"
                    } items-center lg:block lg:mt-2 text-gray-700 dark:text-gray-400 capitalize`}
                >
                    <li className="lg:mt-3 px-2 lg:p-2">
                        <SideNavLink
                            href={route("admin.index")}
                            active={route().current("admin.index")}
                        >
                            <AiOutlineHome className="h-5 w-5" />
                            <span className="text-xs lg:mt-2">Dashboard</span>
                        </SideNavLink>
                    </li>

                    <li className="lg:mt-3 px-2 lg:p-2">
                        <SideNavLink
                            href={route("course.index")}
                            active={route().current("course.index")}
                        >
                            <AiOutlineRead className="h-5 w-5" />
                            <span className="text-xs lg:mt-2">Course</span>
                        </SideNavLink>
                    </li>

                    <li className="lg:mt-3 px-2 lg:p-2">
                        <SideNavLink
                            href={route("category.index")}
                            active={route().current("category.index")}
                        >
                            <AiOutlineBars className="h-5 w-5" />
                            <span className="text-xs lg:mt-2">Category</span>
                        </SideNavLink>
                    </li>
                    <li className="lg:mt-3 px-2 lg:p-2">
                        <SideNavLink
                            href={route("student.index")}
                            active={route().current("student.index")}
                        >
                            <AiOutlineUser className="h-5 w-5" />
                            <span className="text-xs lg:mt-2">Student</span>
                        </SideNavLink>
                    </li>
                    <li className="lg:mt-3 px-2 lg:p-2">
                        <SideNavLink
                            href={route("admin.transaction.index")}
                            active={route().current("admin.transaction.index")}
                        >
                            <AiOutlineCreditCard className="h-5 w-5" />
                            <span className="text-xs lg:mt-2">Transaction</span>
                        </SideNavLink>
                    </li>
                </ul>
                <div className="-mr-2 flex items-center lg:hidden">
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
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " lg:hidden"
                    }
                >
                    <div className="pt-4 pb-1 ">
                        <div className="px-4 border-b border-gray-200">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
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
        </>
    );
};

export default Sidebar;
