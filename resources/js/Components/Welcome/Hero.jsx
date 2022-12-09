const Hero = () => {
    return (
        <>
            <div className=" bg-white relative pt-10 pb-10 lg:pt-10 lg:px-10 dark:bg-gray-900 transition ease-in-out duration-500">
                <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
                    <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                            You can
                            <br className="lg:block hidden" />
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                learning
                            </span>
                            <span> </span>
                            anything.
                        </h1>
                        <div className="lg:flex">
                            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                    Improve Your Skill.
                                </p>
                                <div className="flex justify-center lg:justify-start">
                                    <a
                                        href="#"
                                        className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                                    >
                                        <div className="flex justify-center space-x-4">
                                            <span className="font-medium dark:text-white">
                                                Join class Here
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 lg:w-2/4">
                        <div className="relative w-full">
                            <div
                                aria-hidden="true"
                                className="absolute scale-75 md:scale-110 inset-0 m-auto w-32 h-32 md:w-48 md:h-48 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                            ></div>
                            <div className="relative w-full">
                                <img
                                    src="/Assets/avatar.png"
                                    className="mx-auto"
                                    alt="wath illustration"
                                    loading="lazy"
                                    width="320"
                                    height="280"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
