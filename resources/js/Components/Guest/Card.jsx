import {
    FaCertificate,
    FaClipboardCheck,
    FaRegComments,
    FaRegFileAlt,
    FaRegFolderOpen,
} from "react-icons/fa";
const Card = ({ title, icon, desc }) => {
    const getIcon = (icon) => {
        if (icon === "FaCertificate") {
            return <FaCertificate />;
        } else if (icon == "FaClipboardCheck") {
            return <FaClipboardCheck />;
        } else if (icon == "FaRegComments") {
            return <FaRegComments />;
        } else if (icon == "FaRegFileAlt") {
            return <FaRegFileAlt />;
        } else if (icon == "FaRegFolderOpen") {
            return <FaRegFolderOpen />;
        }
    };
    return (
        <div className="max-w-lg p-4 border rounded-lg shadow dark:text-white">
            <div className="flex items-center pb-2 mb-2 space-x-3 border-b">
                {getIcon(icon)}
                <h4 className="font-semibold text-lg leading-tight tracking-tighter capitalize">
                    {title}
                </h4>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">{desc}</p>
        </div>
    );
};

export default Card;
