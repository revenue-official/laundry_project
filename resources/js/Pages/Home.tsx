import { Head } from "@inertiajs/react";
import { HomeContext } from "@/Contexts/HomeContext";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DefaultCard from "@/Components/DefaultCard";
import LifeTime from "@/Components/LifeTime";

interface DataItem {
    id: number;
    name: string;
    status: string;
    price: string;
    orderDate: string;
}

export default function Home({ title }: { title: string }) {

    const data: DataItem[] = [
        { id: 1, name: 'John bzerk', status: 'active', price: '200.000', orderDate: '2024-02-15' },
        { id: 2, name: 'Jane hautron', status: 'inactive', price: '50.000', orderDate: '2024-01-22' },
        { id: 3, name: 'Bob laywer', status: 'deleted', price: '100.000', orderDate: '2024-03-13' },
        { id: 4, name: 'Alice pinka', status: 'rejected', price: '250.000', orderDate: '2024-04-12' },
        { id: 5, name: 'Charlie puth', status: 'deleted', price: '300.000', orderDate: '2024-06-10' },
        { id: 6, name: 'Donde jueto', status: 'deleted', price: '40.000', orderDate: '2024-03-31' },
        { id: 7, name: 'David beckam', status: 'approved', price: '2.000.000', orderDate: '2024-09-02' },
    ];

    const statusInfo: { status?: string, color?: string }[] = [
        { status: 'active', color: 'bg-green-400' },
        { status: 'inactive', color: 'bg-gray-400' },
        { status: 'deleted', color: 'bg-red-400' },
        { status: 'pending', color: 'bg-orange-400' },
        { status: 'approved', color: 'bg-sky-400' },
        { status: 'rejected', color: 'bg-indigo-400' },
    ];

    const totalPrice: number = data.reduce((accumulator, currentItem) => {
        const currentPrice = parseFloat(currentItem.price.replace(/\D/g, ''));
        return accumulator + currentPrice;
    }, 0);


    return (
        <HomeContext.Provider value={data}>
            <Head title={title} />
            <div className="w-full mt-5">
                <div className="w-fit md:mx-14">
                    <div className="min-w-full h-fit md:flex">
                        <div className="w-full md:w-fit h-fit mx-auto md:mx-0 bg-white my-4 rounded-md px-2 shadow-sm">
                            <div className="pl-6 pt-4">
                                <span>Information : </span>
                            </div>
                            <div className="flex">
                                <ul className="flex flex-row flex-wrap gap-2 px-4 pt-2 pb-4">
                                    {
                                        statusInfo.map((item, index) => (
                                            <li key={index}
                                                className="inline-flex items-center flex-1">
                                                <span className={`relative inline-flex rounded-full h-3 w-3 m-2
                                            ${item.color}`}></span>
                                                <span className="font-poppins text-sm">{item.status}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* rainbow card  */}
                        <div className="flex-grow md:h-24 mx-2 bg-sky-200 my-4 rounded-md shadow-sm">
                            <div className="flex flex-col w-full h-full p-3 justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list text-sky-500"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
                                <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-start">
                                    <div className="font-anton text-xl text-sky-500 px-1 mt-2">{data.length}</div>
                                    <span className="text-xs text-gray-800 whitespace-nowrap pt-5 md:pt-0">Total Orders</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow md:h-24 mx-2 bg-orange-200 my-4 rounded-md shadow-sm">
                            <div className="flex flex-col w-full h-full p-3 justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins text-orange-500"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                                <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-start">
                                    <div className="font-anton text-xl text-orange-500 px-1 mt-2">{totalPrice.toLocaleString()}</div>
                                    <span className="text-xs text-gray-800 whitespace-nowrap pt-5 md:pt-0">Total Prices</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow md:h-24 mx-2 bg-green-200 my-4 rounded-md shadow-sm">
                            <div className="flex flex-col w-full h-full p-3 justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign text-green-500"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                                <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-start">
                                    <div className="font-anton text-xl text-green-500 px-1 mt-2">{data.length}</div>
                                    <span className="text-xs text-gray-800 whitespace-nowrap pt-5 md:pt-0">Active Orders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mx-4 my-2">
                        <span className="font-poppins font-semibold text-lg md:text-md whitespace-nowrap text-gray-600">Client Orders</span>
                        <LifeTime openingHour={7} closingHour={23} />
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-5">
                        {
                            data.map((item, index) => (
                                <DefaultCard key={item.id} data_id={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </HomeContext.Provider >
    );
}

Home.layout = (page: React.ReactNode) => <DefaultLayout children={page} /> 