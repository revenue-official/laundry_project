import React, { useState, useEffect } from 'react';

interface StoreProps {
    openingHour: number;
    closingHour: number;
}

const LifeTime: React.FC<StoreProps> = ({ openingHour, closingHour }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const getCurrentTime = (): number => {
        return currentTime.getHours();
    };

    const isStoreOpen = (): boolean => {
        const currentHour = getCurrentTime();
        return currentHour >= openingHour && currentHour < closingHour;
    };

    const updateCurrentTime = (): void => {
        setCurrentTime(new Date());
    };

    const checkStoreStatus = (): string => {
        updateCurrentTime();
        if (isStoreOpen()) {
            const remainingTime = (closingHour - getCurrentTime()) * 60 * 60; // Konversi jam ke detik
            const days = Math.floor(remainingTime / (24 * 60 * 60)); // Detik ke hari
            const hours = Math.floor((remainingTime % (24 * 60 * 60)) / 3600); // Detik ke jam
            const minutes = Math.floor((remainingTime % 3600) / 60); // Detik ke menit
            const seconds = remainingTime % 60; // Sisa detik

            return `The store is open. Remaining time: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
        } else {
            return "The store is closed.";
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(checkStoreStatus());
        }, 1000);

        // Membersihkan interval pada komponen unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [openingHour, closingHour, currentTime]);

    return <div>This is the Store component.</div>;
};

export default LifeTime;
