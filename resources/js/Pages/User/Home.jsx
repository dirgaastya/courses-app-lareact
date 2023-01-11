import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex flex-col capitalize text-3xl sm:px-6 lg:px-8">
                <span className="font-semibold">hello,</span>
                <span>{props.auth.user.name}!</span>
                <span className="font-thin text-sm text-gray-500">
                    Happy Learning 😊
                </span>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="py-4 px-2 bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <div className="border-b border-gray-600">
                            <h3 className="text-sm md:text-md font-semibold leading-relaxed capitalize dark:text-white">
                                Your Course
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
