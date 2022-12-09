import { Routes, Route } from "react-router-dom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Home from "@/Pages/Admin/Home";
import Form from "@/Pages/Admin/Form";

const Index = (props) => {
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <Routes>
                    <Route
                        path="admin/dashboard"
                        element={<Home {...props} />}
                    />
                    <Route
                        path="admin/dashboard/form"
                        element={<Form {...props} />}
                    />
                </Routes>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
