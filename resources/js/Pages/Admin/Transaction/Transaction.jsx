import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import Pagination from "@/Components/Pagination";
import Loading from "@/Components/Loading";
import Header from "@/Components/Dashboard/Header";
import moment from "moment-timezone";

const Transaction = (props) => {
    const { transactions } = usePage().props;
    console.log(transactions);
    const [transactionLists, setTransactionLists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTransactionLists(transactions.data);
        setLoading(false);
    }, []);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this transaction?")) {
            Inertia.delete(route("admin.transaction.delete", id));
            setTransactionLists(
                transactionLists.filter((transaction) => transaction.id !== id)
            );
        }
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Header title="Transaction List" auth={props.auth} />
            <div className="py-2 mb-3 md:py-4 md:mb-5 flex flex-col lg:items-center">
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
                                        Course Name
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        User
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Purchased at
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-100">
                                {transactionLists !== undefined ? (
                                    transactionLists.map(
                                        (transaction, index) => (
                                            <tr key={`transaction-${index}`}>
                                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                    <p className="dark:text-gray-100">
                                                        {transaction.id}
                                                    </p>
                                                </td>
                                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                    <p className="dark:text-gray-100">
                                                        {
                                                            transaction.course
                                                                .title
                                                        }
                                                    </p>
                                                </td>
                                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                    {transaction.user.name}
                                                </td>
                                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 ">
                                                    {moment
                                                        .tz(
                                                            transaction.created_at,
                                                            "Asia/Jakarta"
                                                        )
                                                        .format("d MMMM YYYY")}
                                                </td>
                                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                    <div className="flex flex-col md:flex-row items-center gap-2">
                                                        <Link
                                                            href={route(
                                                                "admin.transaction.show",
                                                                transaction.id
                                                            )}
                                                            className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500 transition ease-linear duration-300"
                                                        >
                                                            <BiShow />
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    transaction.id
                                                                )
                                                            }
                                                            className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 transition ease-linear duration-300"
                                                        >
                                                            <MdDelete />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )
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
                            from={transactions.from}
                            to={transactions.to}
                            next={transactions.next_page_url}
                            prev={transactions.prev_page_url}
                            total={transactions.total}
                        />
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Transaction;
