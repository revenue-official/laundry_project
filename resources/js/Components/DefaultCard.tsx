import { useState, useEffect, useContext } from "react";
import { HomeContext } from "@/Contexts/HomeContext";

interface DataItem {
    id?: number;
    name?: string;
    status?: string;
    orderDate?: string;
}

interface DefaultCardProps {
    className?: string;
    data_id?: number;
}

type CheckStatus = {
    active: string;
    inactive: string;
    deleted: string;
    pending: string;
    approved: string;
    rejected: string;
};

export default function DefaultCard({ className = "", data_id = 0 }: DefaultCardProps) {

    const dataContext: DataItem[] = useContext(HomeContext)

    const borderBottom: string[] = [
        'border-sky-400',
        'border-red-400',
        'border-orange-400',
        'border-pink-400',
        'border-green-400',
        'border-indigo-400'
    ];

    type CheckStatusKey = 'active' | 'inactive' | 'deleted' | 'pending' | 'approved' | 'rejected';

    const getCheckStatus = (status: CheckStatusKey): string => {
        const checkStatus: CheckStatus = {
            active: 'bg-green-400',
            inactive: 'bg-gray-400',
            deleted: 'bg-red-400',
            pending: 'bg-orange-400',
            approved: 'bg-sky-400',
            rejected: 'bg-indigo-400',
        };

        return checkStatus[status];
    };

    const getStatus: CheckStatusKey = dataContext[data_id]?.status as CheckStatusKey;

    const [dataId, setDataId] = useState(0);

    useEffect(() => {
        setDataId(data_id)
    }, []);

    return (
        <>
            <div className={`flex flex-grow w-full h-28 md:w-64 md:max-w-64 md:h-32 bg-white rounded-md shadow-sm overflow-hidden ${className}`}>
                <div className={`w-full h-full p-2 border-b-8
                ${borderBottom[dataId % borderBottom.length]}`}>
                    <div className="flex flex-col">
                        <div className="w-full h-12">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 
                                    ${getCheckStatus(getStatus)}`}></span>
                                    <span className={`relative inline-flex rounded-full h-3 w-3 
                                    ${getCheckStatus(getStatus)}`}></span>
                                </span>
                                <h2 className="font-poppins text-xs md:text-sm font-bold text-gray-700">{dataContext[dataId]?.name}</h2>
                            </div>
                            <span className="font-poppins text-xs text-gray-600 pl-5">{dataContext[dataId]?.orderDate}</span>
                        </div>
                        <div className="w-full h-20">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}