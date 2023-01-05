import AuthenticatedHomeLayout from "@/Layouts/AuthenticatedHomeLayout";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useEffect } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { RupiahFormat } from "@/Function/Main";
import moment from "moment-timezone";
import CourseHeading from "@/Components/Guest/CourseHeading";
import Card from "@/Components/Guest/Card";
import data from "@/api/benefits";
import "swiper/css";
import "swiper/css/navigation";

const CourseDetail = (props) => {
    const { course } = usePage().props;
    useEffect(() => {
        document.title = `Hesecourse | ${course.title}`;
    }, []);
    return (
        <AuthenticatedHomeLayout auth={props.auth}>
            <div className="max-w-7xl px-2 md:px-4 lg:px-10 mx-auto relative min-h-screen">
                <CourseHeading title={course.title} />
                <div className="w-full flex flex-col flex-wrap items-center lg:justify-between lg:items-start lg:flex-row  py-6 px-4 space-y-3 lg:space-x-3 lg:space-y-0">
                    <div className="w-full lg:max-w-md">
                        <img
                            className="dark:brightness-[.8] opacity-[1] transform-none mb-1 w-full h-full rounded-lg transition-shadow duration-500 ease-in-out shadow group-hover:shadow-lg"
                            src="https://ik.imagekit.io/vpaoovtzwz/images/series/nextjs-13-dengan-laravel-fortify-jikon.jpg?tr=n-thumbnail"
                            alt="desc"
                        />
                    </div>
                    <div className="flex flex-col space-y-6 lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-3">
                        <div className="w-full lg:max-w-md space-y-3 dark:text-white">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight tracking-tighter capitalize ">
                                {course.title}
                            </h3>
                            <div className="text-sm md:text-md leading-loose font-light">
                                <p className="mb-2 text-gray-300">
                                    Dalam seri ini kita akan belajar bagaimana
                                    mengunakan Next.js 13 sebagai frontend dari
                                    laravel backend yang menggunakan laravel
                                    fortify sebagai otentikasinya.
                                </p>
                                <div className="w-full flex justify-between items-center">
                                    <Link
                                        href="#"
                                        className="px-2 border  rounded-lg font-thin text-gray-600 hover:text-gray-900 hover:border-gray-400 transition duration-300 ease-linear dark:border-blue-700 dark:text-blue-300 dark:hover:text-blue-500 dark:hover:border-blue-900"
                                    >
                                        {course.category.name}
                                    </Link>
                                    <p className="text-xs text-gray-400">
                                        Last updated,{" "}
                                        {moment
                                            .tz(
                                                course.updated_at,
                                                "Asia/Jakarta"
                                            )
                                            .fromNow()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-32 flex justify-between items-center lg:flex-col lg:justify-start ">
                        <p className="md:mb-3 text-center text-lg font-semibold dark:text-white">
                            Rp. {RupiahFormat(course.price)}
                        </p>
                        <Link
                            href="#"
                            className="py-2 px-4 border border-green-800 bg-green-500 rounded-xl text-center text-white font-semibold "
                        >
                            Buy Course
                        </Link>
                    </div>
                </div>
                <CourseHeading title="what will you get" />
                <div className="py-6 px-4">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={true}
                        spaceBetween={50}
                        slidesPerView={1.25}
                        draggable={true}
                        breakpoints={{
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {data.map((data, index) => (
                            <SwiperSlide key={`card-${index}`}>
                                <Card
                                    icon={data.icon}
                                    title={data.title}
                                    desc={data.desc}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </AuthenticatedHomeLayout>
    );
};

export default CourseDetail;
