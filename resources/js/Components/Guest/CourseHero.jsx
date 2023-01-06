import { TypeAnimation } from "react-type-animation";
const CourseHero = ({ data, categories }) => {
    return (
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
                            Start, switch, or advance your career with more than
                            5,400 courses, Professional Certificates, and
                            degrees from world-class universities and companies.
                        </p>

                        <div className={"space-y-3"}>
                            <TypeAnimation
                                sequence={data}
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
            <div className="hidden md:block mt-12 md:mt-0 lg:w-2/4">
                <div className=" relative w-full">
                    <div
                        aria-hidden="true"
                        className="absolute z-0 right-[32em] top-16 scale-75 md:scale-110 inset-0 m-auto w-32 h-32 md:w-48 md:h-48 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default CourseHero;
