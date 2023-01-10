import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/inertia-react";

const StudentDetail = (props) => {
    const { student } = usePage().props;

    const birthdate = new Date(student.birthdate).toLocaleString("id-ID", {
        day: "numeric",
        year: "numeric",
        month: "long",
    });

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="py-4 mb-5 flex items-center justify-between">
                <div className="flex flex-col capitalize text-3xl ">
                    <span className="font-bold">Student Detail </span>
                </div>
                <Link
                    href={route("student.index")}
                    className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                    <p className="text-white">Back</p>
                </Link>
            </div>

            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <p className="font-semibold text-lg mb-3">Information</p>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Student ID
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.id}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Status
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.user.status === 1
                                        ? "Actived"
                                        : "Not Actived"}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Full Name
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.name}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Email
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400 ">
                                <span className="leading-relaxed">
                                    {student.user.email}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Birthplace
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.birthplace}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Birthdate
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {birthdate}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                City
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.city}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.phone_number}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                Job
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.job}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 md:px-4 md:col-span-3">
                            <p className="block text-sm font-medium text-gray-700">
                                education
                            </p>
                            <div className="py-1 px-2 block w-full border-b border-indigo-400">
                                <span className="leading-relaxed">
                                    {student.education}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default StudentDetail;
