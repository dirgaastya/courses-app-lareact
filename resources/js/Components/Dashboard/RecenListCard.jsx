import { Link } from "@inertiajs/inertia-react";

const RecentListCard = ({ title, children, to }) => {
    return (
        <div className="mr-6 w-full mt-8 py-2 px-8 flex-shrink-0 flex flex-col bg-white dark:bg-gray-600 rounded-lg">
            <div>
                <Link
                    href={`admin/${to}`}
                    className="flex items-center pt-1 pb-1 text-lg font-semibold capitalize dark:text-gray-300"
                >
                    <span>{title}</span>
                    <div className="ml-2">
                        <svg
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 256 512"
                        >
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
                                                0l-22.6-22.6c-9.4-9.4-9.4-24.6
                                                0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
                                                0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
                                                136c9.5 9.4 9.5 24.6.1 34z"
                            ></path>
                        </svg>
                    </div>
                </Link>
            </div>

            {children}
            <div>
                <a
                    href={`admin/${to}`}
                    className="flex justify-center capitalize text-blue-500
						dark:text-blue-200"
                >
                    <span>see all</span>
                </a>
            </div>
        </div>
    );
};

export default RecentListCard;
