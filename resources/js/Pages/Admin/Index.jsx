import { Routes, Route } from "react-router-dom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Home from "@/Pages/Admin/Home";
import Form from "@/Pages/Admin/Form/Form";
import Course from "@/Pages/Admin/Course/Course";
import AddCourse from "@/Pages/Admin/Course/AddCourse";
import EditCourse from "@/Pages/Admin/Course/EditCourse";
import { usePage } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { courses } = usePage().props;
    console.log(courses);
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <Routes>
                    <Route path="admin/" element={<Home {...props} />} />
                    <Route path="admin/form" element={<Form {...props} />} />
                    <Route
                        path="admin/course"
                        element={
                            <Course
                                {...props}
                                data={courses.data}
                                from={courses.from}
                                to={courses.to}
                                next={courses.next_page_url}
                                prev={courses.prev_page_url}
                                total={courses.total}
                            />
                        }
                    />

                    <Route
                        path="admin/course/add"
                        element={<AddCourse {...props} />}
                    />
                    <Route
                        path="admin/course/:id"
                        element={<EditCourse {...props} />}
                    />
                </Routes>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
