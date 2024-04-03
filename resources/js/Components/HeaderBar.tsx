import axios from "axios";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface dataUserProps {
    name?: string | null;
    token?: string | null;
}

export default function HeaderBar() {
    const { props } = usePage();

    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        const { dataUser } = props;
        const { name, token }: dataUserProps = dataUser;
        if (name !== null && token !== null) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, [isLogin]);

    // handle random char
    const handleSignUp = () => {
        // create random 20 length char
        const randomChar = Math.random().toString(36).substring(2, 15);
        // convert base64
        const base64 = btoa(randomChar);
        // route to register
        window.location.href = route("register", base64);
    };

    const handleLogin = () => {
        window.location.href = route("login");
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Anda akan keluar dari halaman Home",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = route("logout");
            }
        });
    };
    return (
        <>
            <nav className="w-full min-h-14 flex items-center bg-white shadow-md shadow-gray-200">
                <div className="w-full px-5 md:px-10 py-4 flex items-center justify-between text-black dark:text-white">
                    <span>
                        <h1 className="text-md md:text-2xl font-poppins text-indigo-500">
                            Laundry Excount's
                        </h1>
                    </span>
                    <ul className="inline-flex gap-5 text-xs md:text-base">
                        <li className={isLogin ? "hidden" : ""}>
                            <button
                                className="text-black"
                                onClick={handleLogin}
                            >
                                <span>Login</span>
                            </button>
                        </li>
                        <li className={isLogin ? "hidden" : ""}>
                            <button
                                className="text-white"
                                onClick={handleSignUp}
                            >
                                <span className="bg-indigo-500 py-2 px-5 rounded-full shadow-sm shadow-gray-200 active:bg-indigo-600">
                                    Sign in
                                </span>
                            </button>
                        </li>
                        <li className={!isLogin ? "hidden" : ""}>
                            <button
                                className="text-white"
                                onClick={handleLogout}
                            >
                                <span className="bg-gray-500 py-2 px-5 rounded-full shadow-sm shadow-gray-200 active:bg-red-500">
                                    Logout
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
