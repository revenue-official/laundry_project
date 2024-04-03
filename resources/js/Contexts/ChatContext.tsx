import React from "react";

interface DataItem {
    id?: number;
    user_id?: number;
    name?: string;
    message?: string;
    created_at?: string;
    updated_at?: string;
}

export const ChatContext = React.createContext({} as DataItem[]);
