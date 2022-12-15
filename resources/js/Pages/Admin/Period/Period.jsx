import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Inertia } from "@inertiajs/inertia";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Pagination from "@/Components/Pagination";
import Loading from "@/Components/Loading";
import Header from "@/Components/Dashboard/Header";
import InputSearch from "@/Components/Dashboard/InputSearch";
import InputFilterId from "@/Components/Dashboard/InputFilterId";

const Period = (props) => {
    const periods = props.data;
    const { from, to, total, next, prev } = props;
    const [periodList, setPeriodList] = useState([]);
    const [orderId, setOrderId] = useState("dsc");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPeriodList(periods);
        setLoading(false);
    }, []);

    useEffect(() => {
        const searchQuery = search;
        if (periods !== undefined) {
            if (orderId === "asc") {
                setPeriodList(
                    periods
                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                        .filter((period) => {
                            return (
                                period.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            } else if (orderId === "dsc") {
                setPeriodList(
                    periods
                        .sort((a, b) => (a.id > b.id ? -1 : 1))
                        .filter((period) => {
                            return (
                                period.name
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
            Inertia.delete(route("admin-period-delete", id));
            setPeriodList(periodList.filter((period) => period.id !== id));
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
        <div>
            <Header title="Period List" auth={props.auth} />
            <div className="py-2 mb-3 md:py-4 md:mb-5 flex flex-col lg:items-center">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
                    <div className="w-2/3 flex flex-col lg:flex-row gap-x-2">
                        <InputSearch
                            handle={setSearch}
                            searchName={"Period name"}
                        />
                        <div className="w-full lg:w-1/2  flex gap-x-2">
                            <InputFilterId
                                handle={setOrderId}
                                value={orderId}
                            />
                        </div>
                    </div>
                    <Link
                        to="/admin/period/add"
                        className="mt-2 lg:mt-0 text-white text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-blue-500 hover:bg-blue-600 transition ease-linear duration-300"
                    >
                        Add Period
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
                                        Name
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
                                        Time start
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Time end
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Cost
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-100">
                                {periodList !== undefined ? (
                                    periodList.map((period, index) => (
                                        <tr key={`period-${index}`}>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {period.id}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {period.name}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                                                <p className="dark:text-gray-100">
                                                    {period.time_start}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                {period.time_end}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                <span>Rp.</span>{" "}
                                                {rupiahFormat(period.cost)}
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex flex-col md:flex-row items-center gap-2">
                                                    <Link
                                                        to={`/admin/period/${period.id}`}
                                                        className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 transition ease-linear duration-300"
                                                    >
                                                        <MdModeEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                period.id
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

export default Period;
