import { useState, useEffect } from "react";
import { usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import Loading from "@/Components/Loading";
import Header from "@/Components/Dashboard/Header";
import InputSearch from "@/Components/Dashboard/InputSearch";
import InputFilterId from "@/Components/Dashboard/InputFilterId";

const Course = (props) => {
    const { courses, categories } = usePage().props;
    const { from, to, total, next_page_url, prev_page_url } = courses;
    const [courseList, setCourseList] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [orderId, setOrderId] = useState("dsc");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCourseList(courses.data);
        setLoading(false);
    }, []);

    useEffect(() => {
        const query = categoryFilter;
        const searchQuery = search;
        if (courses.data !== undefined) {
            if (orderId === "asc") {
                setCourseList(
                    courses.data
                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                        .filter((course) => {
                            return (
                                course.category_id
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) !== -1
                            );
                        })
                        .filter((course) => {
                            return (
                                course.title
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            } else if (orderId === "dsc") {
                setCourseList(
                    courses.data
                        .sort((a, b) => (a.id > b.id ? -1 : 1))
                        .filter((course) => {
                            return (
                                course.category_id
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) !== -1
                            );
                        })
                        .filter((course) => {
                            return (
                                course.title
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            }
        }
    }, [categoryFilter, orderId, search]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("course.destroy", id));
            setCourseList(courseList.filter((course) => course.id !== id));
        }
    };

    const rupiahFormat = (num) => {
        let num_string = num.toString(),
            rest_number = num_string.length % 3,
            rupiah = num_string.substr(0, rest_number),
            thousand = num_string.substr(rest_number).match(/\d{3}/g);
        if (thousand) {
            let separator = rest_number ? "." : "";
            rupiah += separator + thousand.join(".");
        }
        return rupiah;
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Header title="Course List" auth={props.auth} />
            <div className="py-2 mb-3 md:py-4 md:mb-5 flex flex-col lg:items-center">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
                    <div className="flex flex-col lg:flex-row gap-x-2">
                        <InputSearch
                            handle={setSearch}
                            searchName={"Course name"}
                        />
                        <div className="w-full lg:w-1/2 flex gap-x-2">
                            <div className="w-1/2 lg:max-w-sm lg:flex lg:flex-col">
                                <label
                                    htmlFor="categoryFilter"
                                    className="text-sm text-gray-600 font-semibold"
                                >
                                    Filter by category
                                </label>
                                <select
                                    id="categoryFilter"
                                    name="categoryFilter"
                                    autoComplete="categoryFilter"
                                    className="w-full py-1 pr-8 text-gray-500 selection:text-sm rounded-md shadow border border-gray-200 focus:bg-white text-sm focus:border-indigo-600"
                                    value={categoryFilter}
                                    onChange={(e) =>
                                        setCategoryFilter(e.target.value)
                                    }
                                >
                                    <option value="">None</option>
                                    {categories.map((category, index) => (
                                        <option
                                            value={category.id}
                                            key={`option-category-${index}`}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <InputFilterId
                                handle={setOrderId}
                                value={orderId}
                            />
                        </div>
                    </div>
                    <Link
                        to="/admin/course/create"
                        className="mt-2 lg:mt-0 text-white text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-blue-500 hover:bg-blue-600 transition ease-linear duration-300"
                    >
                        Add Course
                    </Link>
                </div>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="w-full">
                        <table className="w-full px-3 md:px-8 md:rounded-md md:shadow-md text-left md:overflow-hidden overflow-x-auto bg-white">
                            <thead>
                                <tr className="text-gray-600">
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        ID
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Title
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
                                        Category
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Description
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Price
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
                                                    {course.title}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                                                <p className="dark:text-gray-100">
                                                    {course.category.name}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                {course.description}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                Rp. {rupiahFormat(course.price)}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex flex-col md:flex-row items-center gap-2">
                                                    <Link
                                                        href={`/admin/course/${course.id}`}
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
                            next={next_page_url}
                            prev={prev_page_url}
                            total={total}
                        />
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Course;
