interface DefaultAlertProps {
    Data: {
        title?: string;
        message?: string;
        type?: string;
    };
}
export function DefaultAlert({ Data }: DefaultAlertProps) {
    const { title, message, type } = Data;
    return (
        <div
            className={`max-w-sm mx-auto my-1 ${type === "" ? "hidden" : "block"}`}
        >
            <div className="flex justify-between px-2 py-1 rounded-md bg-red-50 border border-red-300">
                <div className="flex gap-3">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div className="self-center">
                        <span className="text-red-600 font-medium">
                            {title}
                        </span>
                        <div className="text-red-600">
                            <p className="mt-1 sm:text-sm">{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
