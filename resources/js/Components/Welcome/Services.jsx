const Services = () => {
    return (
        <div>
            <div className="dark:bg-gray-900 py-16 transition ease-in-out duration-500">
                <div className="container max-w-7xl mx-auto m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="grid gap-6 lg:grid-cols-9">
                        <div className="lg:col-span-3">
                            <div className="space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                                <img
                                    src="/Assets/services1.png"
                                    alt="illustration"
                                    loading="lazy"
                                    className="w-40 h-40 object-cover mx-auto"
                                />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    Web Development
                                </h3>
                                <p className="mb-6 text-gray-600 dark:text-gray-300">
                                    Obcaecati, quam? Eligendi, nulla numquam
                                    natus laborum porro at cum, consectetur
                                    ullam tempora ipsa iste officia sed
                                    officiis! Incidunt ea animi officiis.
                                </p>
                                <a
                                    href="#"
                                    className="block font-medium text-primary"
                                >
                                    Know more
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                                <div className="mb-6 space-y-4">
                                    <img
                                        src="/Assets/services2.png"
                                        alt="illustration"
                                        loading="lazy"
                                        className="w-40 h-40 object-cover mx-auto"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                        Web Development Mentoring
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Obcaecati, quam? Eligendi, nulla numquam
                                        natus laborum porro at cum, consectetur
                                        ullam tempora ipsa iste officia sed
                                        officiis! Incidunt ea animi officiis.
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="block font-medium text-primary"
                                >
                                    Know more
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                                <div className="mb-6 space-y-4">
                                    <img
                                        src="/Assets/services3.png"
                                        alt="illustration"
                                        loading="lazy"
                                        className="w-40 h-40 object-cover mx-auto"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                        Web Development Training
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Obcaecati, quam? Eligendi, nulla numquam
                                        natus laborum porro at cum, consectetur
                                        ullam tempora ipsa iste officia sed
                                        officiis! Incidunt ea animi officiis.
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="block font-medium text-primary"
                                >
                                    Know more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
