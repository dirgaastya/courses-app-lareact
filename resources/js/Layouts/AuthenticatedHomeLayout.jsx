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
            {children}
            <Footer />
        </div>
    );
};

export default AuthenticatedHomeLayout;
