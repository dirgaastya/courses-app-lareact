import { RupiahFormat } from "@/Function/Main";
import { useForm } from "@inertiajs/inertia-react";
const TransactionModal = (props) => {
    const { data, setData, errors, post } = useForm({
        user_id: props.userID,
        course_id: props.courseID,
    });
    async function handleSubmit(e) {
        e.preventDefault();
        post(route("transaction.store"));
    }
    return (
        <>
            <div
                className="py-12 bg-gray-100/80 dark:bg-gray-900/80 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                id="modal"
            >
                <div
                    role="alert"
                    className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                >
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 dark:bg-gray-900">
                        <h1 className="text-gray-800 dark:text-gray-300 font-lg font-bold tracking-normal leading-tight mb-4">
                            Payment Details
                        </h1>
                        <div className="space-y-3">
                            <div>
                                <p className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                                    Course Name
                                </p>
                                <div className="w-full border-b-2 border-blue-300 pt-1">
                                    <p className="text-gray-800 dark:text-gray-300 font-thin text-md">
                                        {props.title}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-800 dark:text-gray-300 text-sm font-bold leading-tight tracking-normal">
                                    Price
                                </p>
                                <div className="w-full border-b-2 border-blue-300 pt-1">
                                    <p className="text-gray-800 dark:text-gray-300 font-thin text-md">
                                        Rp. {RupiahFormat(props.price)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-start w-full">
                            <button
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                            >
                                Pay
                            </button>
                            <button
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                onClick={props.handleModal}
                            >
                                Cancel
                            </button>
                        </div>
                        <button
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                            onClick={props.handleModal}
                            aria-label="close modal"
                            role="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-x"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionModal;
