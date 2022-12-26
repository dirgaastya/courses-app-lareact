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
import Student from "@/Pages/Admin/Student/Student";
import StudentDetail from "@/Pages/Admin/Student/StudentDetail";
import EditStudent from "@/Pages/Admin/Student/EditStudent";

const Index = (props) => {
    const { courses, categories, students } = usePage().props;
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <Routes>
                    <Route
                        path="admin/"
                        element={
                            <Home
                                auth={props.auth}
                                student={students.data[0]}
                            />
                        }
                    />
                    {/* Courses */}
                    <Route
                        path="admin/course"
                        element={
                            <Course
                                {...props}
                                data={courses.data}
                                categories={categories.data}
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
                        element={
                            <AddCourse {...props} data={categories.data} />
                        }
                    />
                    <Route
                        path="admin/course/:id"
                        element={
                            <EditCourse
                                {...props}
                                data={courses.data}
                                categories={categories.data}
                            />
                        }
                    />

                    {/* Category */}
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

                    {/* Student Route */}
                    <Route
                        path="admin/student"
                        element={
                            <Student
                                {...props}
                                data={students.data}
                                from={students.from}
                                to={students.to}
                                next={students.next_page_url}
                                prev={students.prev_page_url}
                                total={students.total}
                            />
                        }
                    />
                    <Route
                        path="admin/student/:id"
                        element={<StudentDetail />}
                    />
                    <Route
                        path="admin/student/edit/:id"
                        element={<EditStudent />}
                    />
                </Routes>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
