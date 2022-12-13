const InputFilterId = ({ handle, value }) => {
    return (
        <div className="w-1/2 lg:max-w-sm lg:flex lg:flex-col">
            <label
                htmlFor="periodFilter"
                className="text-sm text-gray-600 font-semibold"
            >
                Order by id
            </label>
            <select
                id="periodFilter"
                name="periodFilter"
                autoComplete="periodFilter"
                className="w-full py-1 pr-8 text-gray-500 selection:text-sm rounded-md shadow border border-gray-200 focus:bg-white text-sm focus:border-indigo-600"
                value={value}
                onChange={(e) => handle(e.target.value)}
            >
                <option value={"dsc"}>Descending</option>
                <option value={"asc"}>Ascending</option>
            </select>
        </div>
    );
};

export default InputFilterId;
