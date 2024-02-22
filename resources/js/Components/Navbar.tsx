export default function Navbar() {
    return (
        <>
            <nav className="w-full min-h-14 flex items-center bg-white shadow-md shadow-gray-200">
                <div className="w-full px-5 md:px-10 py-4 flex items-center justify-between text-black dark:text-white">
                    <span>
                        <h1 className="text-md md:text-2xl font-poppins text-sky-500">Laundry Excount's</h1>
                    </span>
                    <ul className="inline-flex gap-5 text-xs md:text-base">
                        <li>
                            <button className="text-black">
                                <span>
                                    Login
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="text-white">
                                <span className="bg-sky-500 py-2 px-5 rounded-full shadow-sm shadow-gray-200">
                                    Sign in
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}