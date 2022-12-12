import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
const AddCourse = (props) => {
    const navigate = useNavigate();
    const { data, setData, errors, post, wasSuccessful } = useForm({
        name: "",
        mentor_name: "",
        period_id: "FY01",
    });

    const [isError, setIsError] = useState("");

    useEffect(() => {
        if (wasSuccessful) {
            navigate("/admin/course");
        }
    }, [wasSuccessful]);

    async function handleSubmit(e) {
        e.preventDefault();
        post(route("admin-course-add"));

        console.log(wa);
    }
    return (
        <div>
            <div className="py-4 mb-5 flex items-center justify-between">
                <div className="flex flex-col capitalize text-3xl ">
                    <span className="font-bold">Add Course </span>
                </div>
                <Link
                    to="/admin/course"
                    className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                    <p className="text-white ">Back</p>
                </Link>
            </div>
            <form onSubmit={handleSubmit} method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="course_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Course name
                                </label>
                                <input
                                    type="text"
                                    name="course_name"
                                    id="course_name"
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

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="mentor_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mentor name
                                </label>
                                <input
                                    type="text"
                                    name="mentor_name"
                                    id="mentor_name"
                                    autoComplete="given-name"
                                    value={data.mentor_name}
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={(e) =>
                                        setData("mentor_name", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.mentor_name}
                                </span>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="period_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Period
                                </label>
                                <select
                                    id="period_id"
                                    name="period_id"
                                    value={data.period_id}
                                    autoComplete="period_id"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) =>
                                        setData("period_id", e.target.value)
                                    }
                                >
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

export default AddCourse;
