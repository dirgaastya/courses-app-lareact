import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdModeEdit, MdAdminPanelSettings } from "react-icons/md";
import Dropdown from "@/Components/Dropdown";
import Pagination from "@/Components/Pagination";

const Course = (props) => {
    const courses = props.data;
    const { from, to, total, next, prev } = props;
    const [courseList, setCourseList] = useState([]);
    const [filterPeriod, setFilterPeriod] = useState("");
    const [orderId, setOrderId] = useState("dsc");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCourseList(courses);
        setLoading(false);
    }, []);

    useEffect(() => {
        const query = filterPeriod;
        const searchQuery = search;
        if (courses !== undefined) {
            if (orderId === "asc") {
                setCourseList(
                    courses
                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                        .filter((course) => {
                            return (
                                course.period_id
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) !== -1
                            );
                        })
                        .filter((course) => {
                            return (
                                course.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            } else if (orderId === "dsc") {
                setCourseList(
                    courses
                        .sort((a, b) => (a.id > b.id ? -1 : 1))
                        .filter((course) => {
                            return (
                                course.period_id
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) !== -1
                            );
                        })
                        .filter((course) => {
                            return (
                                course.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            }
        }
    }, [filterPeriod, orderId, search]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("admin-course-delete", id));
            setCourseList(courseList.filter((course) => course.id !== id));
        }
    };
    return (
        <div>
            <div className="flex justify-between text-3xl py-5">
                <span className="font-bold">Course List </span>
                <div>
                    <div className="hidden lg:flex sm:items-center sm:ml-6">
                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <MdAdminPanelSettings className="w-5 h-5" />

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link>
                                        <div className="font-medium text-gray-800">
                                            {props.auth.user.name}
                                        </div>
                                        <div className="font-medium text-sm text-gray-500">
                                            {props.auth.user.email}
                                        </div>
                                    </Dropdown.Link>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2 mb-3 md:py-4 md:mb-5 flex flex-col lg:items-center justify-between">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
                    <div className="flex flex-col lg:flex-row gap-x-2">
                        <div className="lg:max-w-sm lg:flex lg:flex-col">
                            <p
                                htmlFor="periodFilter"
                                className="text-sm text-gray-600 font-semibold"
                            >
                                Search
                            </p>
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search by course name"
                                    className="w-full py-1 pl-12 pr-4 text-gray-500 placeholder:text-sm rounded-md shadow border border-gray-200 focus:bg-white focus:border-indigo-600"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex gap-x-2">
                            <div className="w-1/2 lg:max-w-sm lg:flex lg:flex-col">
                                <label
                                    htmlFor="periodFilter"
                                    className="text-sm text-gray-600 font-semibold"
                                >
                                    Filter by period
                                </label>
                                <select
                                    id="periodFilter"
                                    name="periodFilter"
                                    autoComplete="periodFilter"
                                    className="w-full py-1 pr-8 text-gray-500 selection:text-sm rounded-md shadow border border-gray-200 focus:bg-white text-sm focus:border-indigo-600"
                                    value={filterPeriod}
                                    onChange={(e) =>
                                        setFilterPeriod(e.target.value)
                                    }
                                >
                                    <option value={""}>None</option>
                                    <option value={"FY01"}>
                                        First Year - FY
                                    </option>
                                    <option value={"MY01"}>
                                        Mid Year - MY
                                    </option>
                                    <option value={"EY01"}>
                                        End Year - EY
                                    </option>
                                </select>
                            </div>
                            <div className="w-1/2 lg:max-w-sm lg:flex lg:flex-col">
                                <label
                                    htmlFor="periodFilter"
                                    className="text-sm text-gray-600 font-semibold"
                                >
                                    Order by id
                                </label>
                                <select
                                    id="periodFilter"
                                    name="periodFilter"
                                    autoComplete="periodFilter"
                                    className="w-full py-1 pr-8 text-gray-500 selection:text-sm rounded-md shadow border border-gray-200 focus:bg-white text-sm focus:border-indigo-600"
                                    value={orderId}
                                    onChange={(e) => setOrderId(e.target.value)}
                                >
                                    <option value={"dsc"}>Descending</option>
                                    <option value={"asc"}>Ascending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/admin/course/add"
                        className="mt-2 lg:mt-0 text-white text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-blue-500 hover:bg-blue-600 transition ease-linear duration-300"
                    >
                        Add Course
                    </Link>
                </div>
                {loading ? (
                    <div className="flex w-full justify-center items-center gap-x-3">
                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-sky   -300 animate-spin">
                            <div class="h-6 w-6 rounded-full bg-gray-100"></div>
                        </div>
                        <span className="animate-bounce font-semibold">
                            Loading...
                        </span>
                    </div>
                ) : (
                    <div className="w-full">
                        <table className="w-full px-3 md:px-8 md:rounded-md md:shadow-md text-left md:overflow-hidden overflow-x-auto bg-white">
                            <thead>
                                <tr className="text-gray-600">
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        ID
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Name
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
                                        Mentor
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Period
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-100">
                                {courseList !== undefined ? (
                                    courseList.map((course, index) => (
                                        <tr key={`course-${index}`}>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {course.id}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {course.name}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                                                <p className="dark:text-gray-100">
                                                    {course.mentor_name}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                {course.period_id}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex flex-col md:flex-row items-center gap-2">
                                                    <Link
                                                        to={`/admin/course/${course.id}`}
                                                        className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 transition ease-linear duration-300"
                                                    >
                                                        <MdModeEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                course.id
                                                            )
                                                        }
                                                        className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 transition ease-linear duration-300"
                                                    >
                                                        <MdDelete />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                            <p className="dark:text-gray-100">
                                                No data available
                                            </p>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                            <p className="dark:text-gray-100">
                                                No data available
                                            </p>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                                            <p className="dark:text-gray-100">
                                                No data available
                                            </p>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                            No data available
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                            <div className="flex flex-col md:flex-row items-center gap-2">
                                                <p>No data available</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <Pagination
                            from={from}
                            to={to}
                            next={next}
                            prev={prev}
                            total={total}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Course;
