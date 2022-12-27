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

const Category = (props) => {
    const { categories } = usePage().props;
    const { from, to, total, next_page_url, prev_page_url } = categories;
    const [categoriesList, setCategoriesList] = useState([]);
    const [orderId, setOrderId] = useState("dsc");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCategoriesList(categories.data);
        setLoading(false);
    }, []);

    useEffect(() => {
        const searchQuery = search;
        if (categories.data !== undefined) {
            if (orderId === "asc") {
                setCategoriesList(
                    categories.data
                        .sort((a, b) => (a.id > b.id ? 1 : -1))
                        .filter((category) => {
                            return (
                                category.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            } else if (orderId === "dsc") {
                setCategoriesList(
                    categories.data
                        .sort((a, b) => (a.id > b.id ? -1 : 1))
                        .filter((category) => {
                            return (
                                category.name
                                    .toLowerCase()
                                    .indexOf(searchQuery.toLowerCase()) !== -1
                            );
                        })
                );
            }
        }
    }, [orderId, search]);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category?")) {
            Inertia.delete(route("category.destroy", id));
            setCategoriesList(
                categoriesList.filter((category) => category.id !== id)
            );
        }
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Header title="Category List" auth={props.auth} />
            <div className="py-2 mb-3 md:py-4 md:mb-5 flex flex-col lg:items-center">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between my-6">
                    <div className="w-2/3 flex flex-col lg:flex-row gap-x-2">
                        <InputSearch
                            handle={setSearch}
                            searchName={"Category name"}
                        />
                        <div className="w-full lg:w-1/2  flex gap-x-2">
                            <InputFilterId
                                handle={setOrderId}
                                value={orderId}
                            />
                        </div>
                    </div>
                    <Link
                        href={route("category.create")}
                        className="mt-2 lg:mt-0 text-white text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-blue-500 hover:bg-blue-600 transition ease-linear duration-300"
                    >
                        Add Category
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
                                        Description
                                    </th>
                                    <th className="font-bold px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 dark:text-gray-100">
                                {categoriesList !== undefined ? (
                                    categoriesList.map((category, index) => (
                                        <tr key={`category-${index}`}>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {category.id}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <p className="dark:text-gray-100">
                                                    {category.name}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                                                <p className="dark:text-gray-100">
                                                    {category.description}
                                                </p>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex flex-col md:flex-row items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "category.edit",
                                                            category.id
                                                        )}
                                                        className="p-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 transition ease-linear duration-300"
                                                    >
                                                        <MdModeEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                category.id
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

export default Category;
