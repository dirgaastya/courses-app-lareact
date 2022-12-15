import { Routes, Route } from "react-router-dom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Home from "@/Pages/Admin/Home";
import Form from "@/Pages/Admin/Form/Form";
import Course from "@/Pages/Admin/Course/Course";
import AddCourse from "@/Pages/Admin/Course/AddCourse";
import EditCourse from "@/Pages/Admin/Course/EditCourse";
import Period from "@/Pages/Admin/Period/Period";
import AddPeriod from "@/Pages/Admin/Period/AddPeriod";
import { usePage } from "@inertiajs/inertia-react";
import EditPeriod from "@/Pages/Admin/Period/EditPeriod";

const Index = (props) => {
    const { courses, periods } = usePage().props;
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <Routes>
                    <Route path="admin/" element={<Home {...props} />} />
                    <Route path="admin/form" element={<Form {...props} />} />
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
                        element={<EditCourse {...props} />}
                    />

                    {/* Period */}
                    <Route
                        path="admin/period"
                        element={
                            <Period
                                {...props}
                                data={periods.data}
                                from={periods.from}
                                to={periods.to}
                                next={periods.next_page_url}
                                prev={periods.prev_page_url}
                                total={periods.total}
                            />
                        }
                    />
                    <Route
                        path="admin/period/add"
                        element={<AddPeriod {...props} />}
                    />

                    <Route
                        path="admin/period/:id"
                        element={<EditPeriod {...props} data={periods.data} />}
                    />
                </Routes>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
