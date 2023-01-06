import { FaMemory, FaDesktop, FaLaptopCode, FaCogs } from "react-icons/fa";
const SpecificationCard = ({ title, icon, desc }) => {
    const getIcon = (icon) => {
        if (icon === "FaMemory") {
            return <FaMemory />;
        } else if (icon == "FaDesktop") {
            return <FaDesktop />;
        } else if (icon == "FaLaptopCode") {
            return <FaLaptopCode />;
        } else if (icon == "FaCogs") {
            return <FaCogs />;
        }
    };
    return (
        <div>
            <div className="flex items-center space-x-3">
                <span className="dark:text-gray-300 text-gray-800">
                    {getIcon(icon)}
                </span>
                <p className="font-semibold capitalize text-gray-800 dark:text-blue-400">
                    {title}
                </p>
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-300">{desc}</p>
        </div>
    );
};

export default SpecificationCard;
