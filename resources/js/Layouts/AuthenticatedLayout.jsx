import Sidebar from "@/Components/Dashboard/Sidebar";
import SidebarUser from "@/Components/Dashboard/SidebarUser";
import { useState } from "react";

export default function Authenticated({ auth, header, children }) {
    const [darkMode, setDarkMode] = useState(true);
    const handleDarkMode = (state) => {
        setDarkMode(!state);
    };
    return (
        <div
            className={`${
                darkMode ? "dark bg-gray-800" : null
            } min-h-screen w-full lg:flex overflow-hidden select-none`}
        >
            {auth.user.role === "admin" ? (
                <Sidebar auth={auth} />
            ) : (
                <SidebarUser auth={auth} />
            )}

            <main
                className="my-1 pt-2 pb-2 px-3 md:px-6 lg:px-10 lg:flex-1  bg-gray-100 dark:bg-gray-900 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
            >
                {children}
            </main>
        </div>
    );
}
