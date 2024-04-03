import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function SideNavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`flex items-center w-full gap-3 rounded-md duration-200 mt-1 ${
                active
                    ? "bg-gray-200 active:text-gray-800 active:bg-gray-300 shadow-sm"
                    : "bg-inherit active:text-gray-800 active:bg-gray-200 shadow-sm hover:bg-gray-100"
            } text-base font-medium focus:outline-none transition ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
