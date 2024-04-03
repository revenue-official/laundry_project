import { useState, useEffect } from "react";
import SideNavLink from "./SideNavLink";
import { usePage } from "@inertiajs/react";
import {
    LayoutGrid,
    ShoppingBag,
    MessageSquareText,
    Settings,
    CircleUser,
} from "lucide-react";

export default function Sidebar() {
    const { props } = usePage();

    const { dataUser } = props;

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

    const [sideWidth, setSideWidth] = useState(false);

    const lucideChevron = document.querySelector(".lucide-chevron-right");

    const toggleSidebar = () => {
        if (sideWidth === false) {
            setSideWidth(true);
            lucideChevron?.classList.remove("rotate-0");
            lucideChevron?.classList.add("rotate-180");
        } else {
            setSideWidth(false);
            lucideChevron?.classList.remove("rotate-180");
            lucideChevron?.classList.add("rotate-0");
        }
    };

    return (
        <>
            <div
                className={`absolute top-40 w-fit translate-y-14 z-[11] duration-300
            ${sideWidth === false ? "md:translate-x-20" : "translate-x-20 md:translate-x-56"}`}
            >
                <div className="flex items-center bg-white rounded-r-lg">
                    <button className="w-6 h-16" onClick={toggleSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#9ca3af"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right rotate-0 duration-500"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`absolute h-full mt-2 shadow-md shadow-gray-300 rounded-r-2xl duration-300 z-[10]
            ${sideWidth === false ? "w-20 -translate-x-20 md:translate-x-0" : "w-20 md:w-56"}`}
            >
                <div className="relative w-full h-full flex flex-col items-center justify-between bg-white rounded-r-2xl z-[11] overflow-hidden">
                    <div className="absolute left-4 flex items-center">
                        <div className="aspect-square w-12 h-12 mt-4">
                            <img
                                className="rounded-full"
                                src={`https://api.multiavatar.com/${dataUser.name}.png`}
                                alt=""
                            />
                        </div>
                        <div className="flex items-center mt-6 ml-4">
                            <span
                                className={`font-anton text-gray-500 whitespace-nowrap duration-300 cursor-default hidden md:block
                            ${sideWidth === false ? "text-xs" : "text-lg"}`}
                            >
                                {dataUser?.name || "User Name"}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="absolute top-20 left-0 w-full">
                            <ul className="flex flex-col items-center">
                                <h2 className="whitespace-nowrap font-poppins text-left text-xs w-full pl-4 pt-4 pb-2 text-gray-500 border-b-2">
                                    PRODUCT{" "}
                                    <span
                                        className={!sideWidth ? "hidden" : ""}
                                    >
                                        & SERVICE
                                    </span>
                                </h2>
                                <li className="flex justify-center w-full px-2">
                                    <SideNavLink
                                        className={
                                            sideWidth === false
                                                ? "justify-center py-2"
                                                : "text-lg px-5 py-2"
                                        }
                                        href={route("home")}
                                        active={route().current("home")}
                                    >
                                        <LayoutGrid className="text-gray-500" />
                                        <span
                                            className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}
                                        >
                                            Dashboard
                                        </span>
                                    </SideNavLink>
                                </li>
                                <li className="w-full px-2">
                                    <SideNavLink
                                        className={
                                            sideWidth === false
                                                ? "justify-center py-2"
                                                : "text-lg px-5 py-2"
                                        }
                                        href={route("order")}
                                        active={route().current("order")}
                                    >
                                        <ShoppingBag className="text-gray-500" />
                                        <span
                                            className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}
                                        >
                                            Order
                                        </span>
                                    </SideNavLink>
                                </li>
                                <li className="w-full px-2">
                                    <SideNavLink
                                        className={
                                            sideWidth === false
                                                ? "justify-center py-2"
                                                : "text-lg px-5 py-2"
                                        }
                                        href={route("chat")}
                                        active={route().current("chat")}
                                    >
                                        <MessageSquareText className="text-gray-500" />
                                        <span
                                            className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}
                                        >
                                            Chat
                                        </span>
                                    </SideNavLink>
                                </li>
                                <h2 className="whitespace-nowrap font-poppins text-left text-xs w-full pl-4 pt-4 pb-2 text-gray-500 border-b-2">
                                    SETTINGS{" "}
                                    <span
                                        className={!sideWidth ? "hidden" : ""}
                                    >
                                        & PRIVACY
                                    </span>
                                </h2>
                                <li className="w-full px-2">
                                    <SideNavLink
                                        className={
                                            sideWidth === false
                                                ? "justify-center py-2"
                                                : "text-lg px-5 py-2"
                                        }
                                        href={route("home.setting")}
                                        active={route().current("home.setting")}
                                    >
                                        <Settings className="text-gray-500" />
                                        <span
                                            className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}
                                        >
                                            Setting
                                        </span>
                                    </SideNavLink>
                                </li>
                                <li
                                    className={`w-full px-2 ${!isLogin ? "hidden" : ""}`}
                                >
                                    <SideNavLink
                                        className={
                                            sideWidth === false
                                                ? "justify-center py-2"
                                                : "text-lg px-5 py-2"
                                        }
                                        href={route(
                                            "home.profile",
                                            btoa(dataUser.token),
                                        )}
                                        active={route().current(
                                            "home.profile",
                                            btoa(dataUser.token),
                                        )}
                                    >
                                        <CircleUser className="text-gray-500" />
                                        <span
                                            className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}
                                        >
                                            Profile
                                        </span>
                                    </SideNavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
