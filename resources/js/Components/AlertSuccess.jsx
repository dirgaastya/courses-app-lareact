export default function AlertSuccess({ message }) {
    return (
        <div
            className="w-full bg-green-100 rounded-lg py-3 px-6 text-base text-green-700 mb-3"
            role="alert"
        >
            {message}
        </div>
    );
}
