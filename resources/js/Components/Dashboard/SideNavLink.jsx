import { Link } from "@inertiajs/inertia-react";

const SideNavLink = ({ href, active, children }) => {
    return (
        <Link
            href={href}
            className={
                active
                    ? "flex gap-x-2 lg:flex-col items-center text-blue-600 dark:text-blue-300"
                    : "flex gap-x-2 lg:flex-col items-center hover:text-blue-600 dark-hover:text-blue-300"
            }
        >
            {children}
        </Link>
    );
};

export default SideNavLink;
