import React from "react";

const Card = ({ title, body, author, time }) => {
    return (
        <div>
            <a
                className="p-5 flex flex-col justify-between bg-gray-100 dark:bg-gray-200 rounded-lg"
                href="/"
            >
                <div className="flex items-center justify-between font-semibold capitalize dark:text-gray-700">
                    <span>{title}</span>
                </div>

                <p className="text-sm font-medium leading-snugtext-gray-600 my-3">
                    {body}
                </p>

                <div className="flex justify-between">
                    <div className="flex">
                        <span className="text-blue-500 font-semibold">
                            {author}
                        </span>
                    </div>

                    <p className="text-sm font-medium leading-snug text-gray-600">
                        {time}
                    </p>
                </div>
            </a>
        </div>
    );
};

export default Card;
