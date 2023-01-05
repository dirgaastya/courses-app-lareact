const CourseHeading = ({ title }) => {
    return (
        <div className="border-b border-gray-600">
            <h3 className="text-sm md:text-md font-semibold leading-relaxed capitalize dark:text-white">
                {title}
            </h3>
        </div>
    );
};

export default CourseHeading;
