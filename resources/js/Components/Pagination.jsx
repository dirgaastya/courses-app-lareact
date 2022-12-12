import { Link } from "react-router-dom";

const Pagination = ({ links }) => {
    function getClassName(active) {
        return active
            ? "inline-flex mr-2 items-center h-8 w-8 justify-center  text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0 bg-blue-300"
            : "inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0";
    }

    return (
        <>
            {links.length > 3 && (
                <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                    <span className="mr-3">Page 2 of 4</span>
                    {links.map((link, key) =>
                        link.url == null ? (
                            <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                                <svg
                                    className="w-4"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                        ) : (
                            <Link
                                to={`?page=${link.label}`}
                                className={getClassName(link.active)}
                            >
                                <svg
                                    className="w-4"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </Link>
                        )
                    )}
                </div>
            )}
        </>
    );
};

export default Pagination;
