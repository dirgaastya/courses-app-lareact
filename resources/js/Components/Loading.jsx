const Loading = () => {
    return (
        <div className="flex w-full justify-center items-center gap-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-sky   -300 animate-spin">
                <div className="h-6 w-6 rounded-full bg-gray-100"></div>
            </div>
            <span className="animate-bounce font-semibold">Loading...</span>
        </div>
    );
};

export default Loading;
