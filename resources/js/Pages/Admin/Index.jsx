import { Routes, Route } from "react-router-dom";
import { usePage } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Home from "@/Pages/Admin/Home";
import Course from "@/Pages/Admin/Course/Course";
import AddCourse from "@/Pages/Admin/Course/AddCourse";
import EditCourse from "@/Pages/Admin/Course/EditCourse";
import Category from "@/Pages/Admin/Category/Category";
import AddCategory from "@/Pages/Admin/Category/AddCategory";
import EditCategory from "@/Pages/Admin/Category/EditCategory";

const Index = (props) => {
    const { courses, categories } = usePage().props;
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <Routes>
                    <Route path="admin/" element={<Home {...props} />} />
                    {/* Courses */}
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
                        element={<EditCourse {...props} data={courses.data} />}
                    />

                    {/* Period */}
                    <Route
                        path="admin/category"
                        element={
                            <Category
                                {...props}
                                data={categories.data}
                                from={categories.from}
                                to={categories.to}
                                next={categories.next_page_url}
                                prev={categories.prev_page_url}
                                total={categories.total}
                            />
                        }
                    />
                    <Route
                        path="admin/category/add"
                        element={<AddCategory {...props} />}
                    />

                    <Route
                        path="admin/category/:id"
                        element={
                            <EditCategory {...props} data={categories.data} />
                        }
                    />
                </Routes>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
