import Sidebar from "@/Components/Dashboard/Sidebar";

export default function Authenticated({ auth, header, children }) {
    return (
        <div className="min-h-screen w-full lg:flex overflow-hidden select-none ">
            <Sidebar auth={auth} />

            <main
                className="my-1 pt-2 pb-2 px-3 md:px-6 lg:px-10 lg:flex-1  bg-gray-100 dark:bg-gray-900 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
            >
                {children}
            </main>
        </div>
    );
}
