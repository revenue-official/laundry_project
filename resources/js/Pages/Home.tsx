import { Head } from "@inertiajs/react";
import { HomeContext } from "@/Contexts/HomeContext";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DefaultCard from "@/Components/DefaultCard";
import { ClipboardList, HandCoins, CircleDollarSign } from "lucide-react";

interface DataItem {
    id: number;
    name: string;
    status: string;
    price: string;
    orderDate: string;
}

interface HomeProp {
    title: string;
}

export default function Home({ title }: HomeProp) {
    // data client
    const data: DataItem[] = [
        {
            id: 1,
            name: "John bzerk",
            status: "active",
            price: "200.000",
            orderDate: "2024-02-15",
        },
        {
            id: 2,
            name: "Jane hautron",
            status: "inactive",
            price: "50.000",
            orderDate: "2024-01-22",
        },
        {
            id: 3,
            name: "Bob laywer",
            status: "deleted",
            price: "100.000",
            orderDate: "2024-03-13",
        },
        {
            id: 4,
            name: "Alice pinka",
            status: "rejected",
            price: "250.000",
            orderDate: "2024-04-12",
        },
        {
            id: 5,
            name: "Charlie puth",
            status: "deleted",
            price: "300.000",
            orderDate: "2024-06-10",
        },
        {
            id: 6,
            name: "Donde jueto",
            status: "deleted",
            price: "40.000",
            orderDate: "2024-03-31",
        },
    ];

    const statusInfo: { status?: string; color?: string }[] = [
        { status: "active", color: "bg-green-400" },
        { status: "inactive", color: "bg-gray-400" },
        { status: "deleted", color: "bg-red-400" },
        { status: "pending", color: "bg-orange-400" },
        { status: "approved", color: "bg-sky-400" },
        { status: "rejected", color: "bg-indigo-400" },
    ];

    // kode untuk total price
    const totalPrice: number = data.reduce((accumulator, currentItem) => {
        const currentPrice = parseFloat(currentItem.price.replace(/\D/g, ""));
        return accumulator + currentPrice;
    }, 0);

    // Tanggal dan waktu akhir untuk perhitungan mundur
    const countTarget: number = new Date("Apr 29, 2024 20:00:00").getTime();

    // Memperbarui hitungan mundur setiap detik
    const countFunction: NodeJS.Timeout = setInterval(() => {
        // Dapatkan waktu saat ini
        const now: number = new Date().getTime();

        // Hitung selisih waktu antara waktu sekarang dan waktu akhir
        const distance: number = countTarget - now;

        // Hitung hari, jam, menit, dan detik
        const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes: number = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasilnya di elemen dengan id "countdown"
        const countdownElement: HTMLElement | null =
            document.getElementById("countdown");

        if (countdownElement) {
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        // Jika hitungan mundur berakhir, tampilkan pesan
        if (distance < 0) {
            clearInterval(countFunction);
            if (countdownElement) {
                countdownElement.innerHTML = "Waktu telah berakhir!";
            }
        }
    }, 1000); // Perbarui setiap detik

    return (
        <HomeContext.Provider value={data}>
            <Head title={title} />
            <div className="w-full md:mt-5">
                <div className="w-fit md:mx-14">
                    <h2 className="font-anton md:text-2xl text-indigo-500 mx-4">
                        Dashboard Client
                    </h2>
                    <div className="min-w-full h-fit md:flex">
                        <div className="w-full md:w-fit h-fit mx-auto md:mx-0 bg-white my-4 rounded-md px-2 shadow-md">
                            <div className="pl-6 pt-4">
                                <span>Information : </span>
                            </div>
                            <div className="flex">
                                <ul className="flex flex-row flex-wrap gap-2 px-4 pt-2 pb-4">
                                    {statusInfo.map((item, index) => (
                                        <li
                                            key={index}
                                            className="inline-flex items-center flex-1"
                                        >
                                            <span
                                                className={`relative inline-flex rounded-full h-3 w-3 m-2
                                            ${item.color}`}
                                            ></span>
                                            <span className="font-poppins text-sm">
                                                {item.status}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* rainbow card  */}
                        <div className="flex-grow md:h-24 mx-2 bg-sky-200 my-4 rounded-md shadow-md">
                            <div className="flex flex-col w-full h-full p-3 justify-between">
                                <ClipboardList className="text-sky-500" />
                                <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-start">
                                    <div className="font-anton text-xl text-sky-500 px-1 mt-2">
                                        {data.length}
                                    </div>
                                    <span className="text-xs text-gray-800 whitespace-nowrap pt-5 md:pt-0">
                                        Total Orders
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow md:h-24 mx-2 bg-orange-200 my-4 rounded-md shadow-md">
                            <div className="flex flex-col w-full h-full p-3 justify-between">
                                <HandCoins className="text-orange-500" />
                                <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-start">
                                    <div className="font-anton text-xl text-orange-500 px-1 mt-2">
                                        {totalPrice.toLocaleString()}
                                    </div>
                                    <span className="text-xs text-gray-800 whitespace-nowrap pt-5 md:pt-0">
                                        Total Prices
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow md:h-24 mx-2 bg-green-200 my-4 rounded-md shadow-md">
                            <div className="flex flex-col w-full h-full p-3 justify-between">
                                <CircleDollarSign className="text-green-500" />
                                <div className="flex flex-row-reverse items-center justify-between md:flex-col md:items-start">
                                    <div
                                        id="countdown"
                                        className="font-anton text-xl text-green-500 px-1 mt-2"
                                    ></div>
                                    <span className="text-xs text-gray-800 whitespace-nowrap pt-5 md:pt-0">
                                        Start Estimated
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mx-4 my-2">
                        <span className="font-poppins font-semibold text-lg md:text-md whitespace-nowrap text-gray-600">
                            Client Orders
                        </span>
                    </div>
                    <div className="w-full max-h-screen flex flex-wrap gap-2 md:gap-5 overflow-y-scroll">
                        {data.map((item, index) => (
                            <DefaultCard key={item.id} data_id={index} />
                        ))}
                    </div>
                </div>
            </div>
        </HomeContext.Provider>
    );
}

Home.layout = (page: React.ReactNode) => <DefaultLayout children={page} />;
