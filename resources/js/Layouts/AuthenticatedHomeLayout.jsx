import Navbar from "@/Components/Navbar";
import { useState } from "react";
import Footer from "@/Components/Footer";

const AuthenticatedHomeLayout = (props) => {
    const { children, auth } = props;
    const [darkMode, setDarkMode] = useState(true);
    const handleDarkMode = (state) => {
        setDarkMode(!state);
    };
    return (
        <div className={`${darkMode ? "dark" : null}`}>
            <Navbar auth={auth} handleDarkMode={handleDarkMode} />
            <div className="bg-white relative pt-10 pb-10 lg:pt-10 dark:bg-gray-900 transition ease-in-out duration-500">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default AuthenticatedHomeLayout;
