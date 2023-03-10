import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage, Link } from "@inertiajs/inertia-react";

const AddCourse = (props) => {
    const { categories } = usePage().props;
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
        price: 0,
        category_id: "",
    });
    async function handleSubmit(e) {
        e.preventDefault();
        post(route("course.store"));
    }
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="py-4 mb-5 flex items-center justify-between">
                <div className="flex flex-col capitalize text-3xl ">
                    <span className="font-bold">Add Course </span>
                </div>
                <Link
                    href={route("course.index")}
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
                                    htmlFor="course_title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Course name
                                </label>
                                <input
                                    type="text"
                                    name="course_title"
                                    id="course_title"
                                    autoComplete="given-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.title}
                                </span>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="category_id"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Category
                                </label>
                                <select
                                    id="category_id"
                                    name="category_id"
                                    autoComplete="category_id"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) =>
                                        setData("category_id", e.target.value)
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

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="course_price"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="course_price"
                                    id="course_price"
                                    autoComplete="price"
                                    min="1"
                                    step="any"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.price}
                                </span>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    htmlFor="desc"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) => {
                                        setData("description", e.target.value);
                                    }}
                                />
                                <span className="text-xs text-red-600 font-thin">
                                    {errors.description}
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
        </AuthenticatedLayout>
    );
};

export default AddCourse;
