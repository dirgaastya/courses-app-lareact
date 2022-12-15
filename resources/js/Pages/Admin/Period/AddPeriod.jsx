import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
const AddPeriod = (props) => {
    const navigate = useNavigate();
    const { data, setData, errors, post, wasSuccessful } = useForm({
        id: "",
        name: "",
        time_start: "",
        time_end: "",
        cost: 0,
    });

    useEffect(() => {
        if (wasSuccessful) {
            navigate("/admin/period");
        }
    }, [wasSuccessful]);

    async function handleSubmit(e) {
        e.preventDefault();
        post(route("admin-period-add"));
    }
    return (
        <div>
            <div className="py-4 mb-5 flex items-center justify-between">
                <div className="flex flex-col capitalize text-3xl ">
                    <span className="font-bold">Add Period </span>
                </div>
                <Link
                    to="/admin/period"
                    className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                    <p className="text-white ">Back</p>
                </Link>
            </div>
            <form onSubmit={handleSubmit} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-2">
                                <label
                                    htmlFor="period_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Id Period
                                </label>
                                <input
                                    type="text"
                                    name="period_name"
                                    id="period_name"
                                    maxLength="4"
                                    value={data.id}
                                    autoComplete="given-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                    onChange={(e) =>
                                        setData("id", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.id}
                                </span>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="period_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Period name
                                </label>
                                <input
                                    type="text"
                                    name="period_name"
                                    id="period_name"
                                    value={data.name}
                                    autoComplete="given-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.name}
                                </span>
                            </div>

                            <div className="col-span-3">
                                <label
                                    htmlFor="time_start"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Time start
                                </label>
                                <input
                                    type="date"
                                    id="time_start"
                                    name="time_start"
                                    value={data.time_start}
                                    autoComplete="time_start"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) =>
                                        setData("time_start", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.time_start}
                                </span>
                            </div>
                            <div className="col-span-3">
                                <label
                                    htmlFor="time_end"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Time end
                                </label>
                                <input
                                    type="date"
                                    id="time_end"
                                    name="time_end"
                                    value={data.time_end}
                                    autoComplete="time_end"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) =>
                                        setData("time_end", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.time_end}
                                </span>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="cost"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Cost
                                </label>
                                <input
                                    type="number"
                                    id="cost"
                                    name="cost"
                                    value={data.cost}
                                    autoComplete="cost"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) =>
                                        setData("cost", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.cost}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPeriod;
