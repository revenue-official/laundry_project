import React from "react";

interface DataItem {
    id: number;
    name: string;
}

export const HomeContext = React.createContext({} as DataItem[]);