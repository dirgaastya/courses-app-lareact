import ApplicationLogo from "@/Components/ApplicationLogo";
import { useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationDetailUser = (props) => {
    const navigate = useNavigate();
    const { data, setData, errors, post, wasSuccessful } = useForm({
        name: "",
        birthplace: "",
        birthdate: "",
        city: "",
        education: "SMA/SMK",
        job: "",
        phone_number: "",
    });

    console.log(data);

    useEffect(() => {
        if (wasSuccessful) {
            navigate("/dashboard");
        }
    }, [wasSuccessful]);

    async function handleSubmit(e) {
        e.preventDefault();
        post(route("add-user-detail"));
    }

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center py-6  bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-10 h-10 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-2xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="font-semibold py-2">
                    <h3>Data Registration</h3>
                </div>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="w-full">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                        onChange={(e) => {
                                            setData("name", e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="birthplace"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Birthplace
                                    </label>
                                    <input
                                        type="text"
                                        name="birthplace"
                                        id="birthplace"
                                        autoComplete="birthplace"
                                        placeholder="Jakarta"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        onChange={(e) => {
                                            setData(
                                                "birthplace",
                                                e.target.value
                                            );
                                        }}
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="birthdate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Birthdate
                                    </label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        name="birthdate"
                                        autoComplete="birthdate"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => {
                                            setData(
                                                "birthdate",
                                                e.target.value
                                            );
                                        }}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Bandung"
                                        autoComplete="city"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                        onChange={(e) => {
                                            setData("city", e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label
                                        htmlFor="job"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Job
                                    </label>
                                    <input
                                        type="text"
                                        name="job"
                                        id="job"
                                        placeholder="Student"
                                        autoComplete="job"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                        onChange={(e) => {
                                            setData("job", e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="col-span-6">
                                    <label
                                        htmlFor="education"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Education
                                    </label>
                                    <select
                                        id="education"
                                        name="education"
                                        autoComplete="education"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => {
                                            setData(
                                                "education",
                                                e.target.value
                                            );
                                        }}
                                    >
                                        <option value={"SMK/SMA"}>
                                            SMK / SMA
                                        </option>
                                        <option value={"S1"}>S1</option>
                                        <option value={"S2"}>S2</option>
                                        <option value={"S3"}>S3</option>
                                    </select>
                                </div>
                                <div className="col-span-6">
                                    <label
                                        htmlFor="phone_number"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        id="phone_number"
                                        placeholder="08xxxxxxxxxx"
                                        autoComplete="phone_number"
                                        pattern="((\+62 8\d{2}([ -])|08\d{2}([ -]?)|\+628\d{2})\d{4}(\3\4)\d{2,5})"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                                        onChange={(e) => {
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationDetailUser;
