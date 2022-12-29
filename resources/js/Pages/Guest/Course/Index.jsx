import AuthenticatedHomeLayout from "@/Layouts/AuthenticatedHomeLayout";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { RupiahFormat } from "@/Function/Main";
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
            <div className=" bg-white relative pt-10 pb-10 lg:pt-10  dark:bg-gray-900 transition ease-in-out duration-500">
                <div className="max-w-7xl mx-auto lg:flex lg:px-10 lg:items-center lg:justify-between ">
                    <div className="relative z-10 xl:container m-auto px-6 md:px-12 lg:px-6">
                        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                            Learn
                            <br className="lg:block hidden" />
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                without
                            </span>
                            <span> </span>
                            limits.
                        </h1>
                        <div className="lg:flex">
                            <div className="relative mt-4 md:mt-12 space-y-4 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                <p className="sm:text-lg text-gray-700 dark:text-gray-300 ">
                                    Start, switch, or advance your career with
                                    more than 5,400 courses, Professional
                                    Certificates, and degrees from world-class
                                    universities and companies.
                                </p>

                                <div className={"space-y-3"}>
                                    <TypeAnimation
                                        sequence={getArrCategory()}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        className="sm:text-md text-gray-700 dark:text-gray-300 lg:w-11/12 "
                                    />
                                    <div className="flex space-x-3 justify-center lg:justify-start">
                                        {categories.map((category, index) => (
                                            <a
                                                key={`category-${index}`}
                                                href="#"
                                                className="py-1 px-4  border border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                                            >
                                                {category.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 lg:w-2/4">
                        <div className="relative w-full">
                            <div
                                aria-hidden="true"
                                className="absolute z-0 right-[32em] top-16 scale-75 md:scale-110 inset-0 m-auto w-32 h-32 md:w-48 md:h-48 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                            ></div>
                        </div>
                    </div>
                </div>
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
                                    <a href="#">
                                        <div className="LazyLoad is-visible">
                                            <img
                                                className="dark:brightness-[.8] opacity-[1] transform-none mb-1 w-full h-full rounded-lg transition-shadow duration-500 ease-in-out shadow group-hover:shadow-lg"
                                                src="https://ik.imagekit.io/vpaoovtzwz/images/series/nextjs-13-dengan-laravel-fortify-jikon.jpg?tr=n-thumbnail"
                                                alt="desc"
                                            />
                                        </div>
                                    </a>
                                    <div className="mt-2.5 lg:mt-3 flex items-center justify-between">
                                        <div className="font-medium flex gap-x-2 text-xs md:text-sm  flex-wrap items-center  md:gap-x-3 text-blue-400 hover:text-blue-500">
                                            <a href="#">
                                                {course.category.name}
                                            </a>
                                        </div>
                                    </div>
                                    <a className="mt-2.5 lg:mt-3 " href="#">
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
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedHomeLayout>
    );
};

export default Index;
