import AuthenticatedHomeLayout from "@/Layouts/AuthenticatedHomeLayout";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useEffect } from "react";

import { RupiahFormat } from "@/Function/Main";
import CourseHero from "@/Components/Guest/CourseHero";
import moment from "moment-timezone";

const Index = (props) => {
    const { courses, categories } = usePage().props;

    const getArrCategory = () => {
        let result = [];
        categories.map((category) => {
            result.push(category.name);
            result.push(1000);
        });
        return result;
    };

    useEffect(() => {
        document.title = "Hesecourse | Course";
    }, []);
    return (
        <AuthenticatedHomeLayout auth={props.auth}>
            <CourseHero data={getArrCategory()} categories={categories} />
            <div className="mt-16 w-full border-b border-gray-600"></div>
            <div className="max-w-7xl px-2 md:px-4 lg:px-10 mx-auto relative dark:bg-gray-900 min-h-screen">
                <div className="py-3 border-b border-gray-600">
                    <h3 className="text-lg font-semibold leading-relaxed dark:text-white">
                        Course List
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-x-4 md:gap-y-4 py-4">
                    {courses.data.map((course, index) => (
                        <div className="group" key={`course-${index}`}>
                            <div className="text-left focus:outline-none">
                                <Link href={route("course.detail", course.id)}>
                                    <div className="LazyLoad is-visible">
                                        <img
                                            className="dark:brightness-[.8] opacity-[1] transform-none mb-1 w-full h-full rounded-lg transition-shadow duration-500 ease-in-out shadow group-hover:shadow-lg"
                                            src="https://ik.imagekit.io/vpaoovtzwz/images/series/nextjs-13-dengan-laravel-fortify-jikon.jpg?tr=n-thumbnail"
                                            alt="desc"
                                        />
                                    </div>
                                </Link>
                                <div className="mt-2.5 lg:mt-3 flex items-center justify-between">
                                    <div className="font-medium flex gap-x-2 text-xs md:text-sm  flex-wrap items-center  md:gap-x-3 text-blue-400 hover:text-blue-500">
                                        <Link href="#">
                                            {course.category.name}
                                        </Link>
                                    </div>
                                </div>
                                <Link
                                    href={route("course.detail", course.id)}
                                    className="mt-2.5 lg:mt-3 "
                                >
                                    <div>
                                        <span className="block leading-tight tracking-tighter">
                                            <span className="dark:text-white text-slate-800 font-medium capitalize">
                                                {course.title}
                                            </span>
                                        </span>
                                        <span className="dark:text-slate-400 mt-2.5 lg:mt-3 flex items-center justify-between space-x-2 text-slate-500 text-xs sm:text-sm">
                                            <span>
                                                Rp.
                                                {RupiahFormat(course.price)}
                                            </span>
                                            <span>
                                                {moment
                                                    .tz(
                                                        course.created_at,
                                                        "Asia/Jakarta"
                                                    )
                                                    .fromNow()}
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedHomeLayout>
    );
};

export default Index;
