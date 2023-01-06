const Content = () => {
    return (
        <div>
            <div className="dark:bg-gray-900 py-16 transition ease-in-out duration-500">
                <div className="xl:container m-auto px-6 text-gray-600 md:px-10">
                    <div className=" space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div className="md:5/12 lg:w-1/2 rounded overflow-hidden">
                            <img
                                src="/Assets/student.jpg"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                Learn without limits
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                                Start, switch, or advance your career with more
                                than 5,200 courses, Professional Certificates,
                                and degrees from world-class universities and
                                companies.
                            </p>

                            <a
                                href={route("course.list")}
                                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                            >
                                <span className="relative text-base font-semibold text-sky-600 dark:text-white ">
                                    Browse now
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
