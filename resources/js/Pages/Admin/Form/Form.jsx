const Form = (props) => {
    return (
        <div>
            <div className="flex flex-col capitalize text-3xl mb-5">
                <span className="font-semibold">Form List</span>
            </div>
            <table className="w-full text-left overflow-x-auto">
                <thead>
                    <tr className="text-gray-400">
                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                            ID
                        </th>
                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                            Name
                        </th>
                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
                            Period
                        </th>
                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                            Cost
                        </th>
                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-100">
                    <tr>
                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                            <p className="dark:text-gray-100">FY010122</p>
                        </td>
                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                            <p className="dark:text-gray-100">
                                Dirga Astya Wisnuwardana
                            </p>
                        </td>
                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                            <p className="dark:text-gray-100">First Year</p>
                        </td>
                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500">
                            $120.00
                        </td>
                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                <a href="#">Edit</a>
                                <a href="#">Delete</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Form;
