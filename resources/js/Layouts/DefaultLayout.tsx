import HeaderBar from "@/Components/HeaderBar";
import Sidebar from "@/Components/Sidebar";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-100">
                <div className="relative top-0 left-0">
                    <HeaderBar />
                </div>
                <div className="flex">
                    <div className="relative md:w-20">
                        <div className="flex h-full absolute z-[10]">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="w-full min-h-screen mx-4 mt-2 md:mt-5 md:mr-5 p-2 md:bg-gray-100 rounded-xl z-[9]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
