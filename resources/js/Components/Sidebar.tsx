import { useState } from "react";
import NavLink from "./NavLink";

export default function Sidebar() {
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
    }

    return (
        <>
            <div className={`absolute top-10 w-fit translate-y-14 z-[10]
            ${sideWidth === false ? "md:translate-x-20 duration-300" : "translate-x-20 md:translate-x-56 duration-500"}`}>
                <div className="flex items-center bg-white rounded-r-lg shadow-md">
                    <button
                        className="w-6 h-16"
                        onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right rotate-0 duration-500"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
            </div>
            <div className={`h-screen mt-2 shadow-md shadow-gray-300 rounded-r-2xl duration-300 z-[10]
            ${sideWidth === false ? "w-20 -translate-x-20 md:translate-x-0" : "w-20 md:w-56"}`}>
                <div className="relative w-full h-full flex flex-col items-center justify-between bg-white rounded-r-2xl z-[11] overflow-hidden">
                    <div className="absolute left-4 flex items-center">
                        <div className="aspect-square w-12 h-12 mt-4">
                            <img className="rounded-full" src="https://api.multiavatar.com/zoe.png" alt="" />
                        </div>
                        <div className="flex items-center mt-6 ml-4">
                            <span className={`font-anton text-gray-500 whitespace-nowrap duration-300 cursor-default hidden md:block
                            ${sideWidth === false ? "text-xs" : "text-lg"}`}>User Name</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="absolute top-20 left-0 w-full">
                            <ul className="flex flex-col items-center">
                                <li className="flex justify-center w-full px-2">
                                    <a className={`flex items-center w-full gap-3 rounded-md active:bg-gray-200 duration-300
                                    ${sideWidth === false ? "justify-center py-2" : "text-lg px-5 py-2"}`}
                                        href={route('home')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide lucide-layout-grid text-gray-500">
                                            <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
                                        </svg>
                                        <span className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}>Dashboard</span>
                                    </a>
                                </li>
                                <li className="w-full px-2">
                                    <a className={`flex items-center w-full gap-3 rounded-md active:bg-gray-200 duration-300
                                    ${sideWidth === false ? "justify-center py-2" : "text-lg px-5 py-2"}`}
                                        href="bijikers">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide lucide-shopping-bag text-gray-500"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                        <span className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}>Order</span>
                                    </a>
                                </li>
                                <li className="w-full px-2">
                                    <a className={`flex items-center w-full gap-3 rounded-md active:bg-gray-200 duration-300
                                    ${sideWidth === false ? "justify-center py-2" : "text-lg px-5 py-2"}`}
                                        href="bijikers">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide lucide-message-square-text text-gray-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" />
                                        </svg>
                                        <span className={`font-poppins text-gray-500 whitespace-nowrap
                                        ${sideWidth === false ? "md:hidden" : "hidden md:block"}`}>Chat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}