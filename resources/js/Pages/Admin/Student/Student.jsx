import { useState, useEffect } from "react";
import { usePage, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import Loading from "@/Components/Loading";
import Header from "@/Components/Dashboard/Header";
import InputSearch from "@/Components/Dashboard/InputSearch";
import InputFilterId from "@/Components/Dashboard/InputFilterId";
import moment from "moment-timezone";

const Student = (props) => {
    const { students } = usePage().props;
    const { from, to, total, next_page_url, prev_page_url } = students;
    const [studentList, setStudentList] = useState([]);
    const [orderId, setOrderId] = useState("dsc");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setStudentList(students.data);
        setLoading(false);
    }, []);

    useEffect(() => {
        const searchQuery = search;
        if (students.data !== undefined) {
            if (orderId === "asc") {
                setStudentList(
                    students.data
                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                        .filter((student) => {
                            return (
                                student.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            } else if (orderId === "dsc") {
                setStudentList(
                    students.data
                        .sort((a, b) => (a.id > b.id ? -1 : 1))
                        .filter((student) => {
                            return (
                                student.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            }
        }
    }, [orderId, search]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("admin-student-delete", id));
            setStudentList(studentList.filter((student) => student.id !== id));
        }
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Header title="Student List" auth={props.auth} />
            <div className="py-2 mb-3 md:py-4 md:mb-5 flex flex-col lg:items-center">
                <div className="w-full flex flex-col lg:flex-row lg:gap-x-2 lg:items-center my-6">
                    <InputSearch handle={setSearch} searchName={"Username"} />
                    <InputFilterId handle={setOrderId} value={orderId} />
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
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
                                        Username
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Email
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Created at
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Status
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-100">
                                {studentList !== undefined ? (
                                    studentList.map((student, index) => (
                                        <tr key={`student-${index}`}>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {student.id}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {student.name}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                {student.email}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                {moment
                                                    .tz(
                                                        student.created_at,
                                                        "Asia/Jakarta"
                                                    )
                                                    .fromNow()}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                <span
                                                    className={`px-2 py-1 border ${
                                                        student.status === 1
                                                            ? "border-green-400 bg-green-200 text-green-400"
                                                            : "border-red-400 bg-red-200 text-red-400"
                                                    } rounded-2xl text-sm`}
                                                >
                                                    {student.status === 1
                                                        ? "Actived"
                                                        : "Not Actived"}
                                                </span>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex flex-col md:flex-row items-center gap-2">
                                                    {student.status === 1 ? (
                                                        <Link
                                                            to={`/admin/student/${student.id}`}
                                                            className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 transition ease-linear duration-300"
                                                        >
                                                            <BiShow />
                                                        </Link>
                                                    ) : (
                                                        <p className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-100 cursor-not-allowed transition ease-linear duration-300">
                                                            <BiShow />
                                                        </p>
                                                    )}
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                student.id
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

export default Student;
