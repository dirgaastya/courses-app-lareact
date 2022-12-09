export default function ApplicationLogo({ className }) {
    return (
        <div className="flex items-center gap-2">
            <img
                className={className}
                src="/Assets/logo.png"
                width="25"
                height="25"
            />
            <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-sky-500 dark:to-cyan-50">
                Hesecourse.
            </span>
        </div>
    );
}
