export default function Authenticated({ auth, header, children }) {
    return (
        <div className="min-h-screen">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
