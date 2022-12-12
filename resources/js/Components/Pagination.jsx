import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ from, to, total, next, prev }) => {
    function getLinkIndex(url) {
        const reg = url.match(/=/i);
        return url[reg.index + 1];
    }
    return (
        <div className="w-full my-4 flex justify-between items-center">
            <p className="text-sm font-thin">
                Showing <span className="font-semibold">{from}</span> to{" "}
                <span className="font-semibold">{to}</span> of{" "}
                <span className="font-semibold">{total}</span> results
            </p>
            <div className="flex gap-x-2">
                {prev !== null ? (
                    <Link
                        href={`?page=${getLinkIndex(prev)}`}
                        className="text-gray-800 text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-gray-300/50 hover:bg-gray-300/80 transition ease-linear duration-300"
                    >
                        Prev
                    </Link>
                ) : (
                    <p className="cursor-not-allowed text-gray-800 text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-gray-300/10  transition ease-linear duration-300">
                        Prev
                    </p>
                )}

                {next !== null ? (
                    <Link
                        href={`?page=${getLinkIndex(next)}`}
                        className="text-gray-800 text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-gray-300/50 hover:bg-gray-300/80 transition ease-linear duration-300"
                    >
                        Next
                    </Link>
                ) : (
                    <p className="cursor-not-allowed text-gray-800 text-center font-semibold py-2 px-4 border border-transparent shadow-sm text-sm rounded-md  bg-gray-300/10  transition ease-linear duration-300">
                        Next
                    </p>
                )}
            </div>
        </div>
    );
};

export default Pagination;
