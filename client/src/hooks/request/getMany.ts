import { useEffect, useState } from "react";
import { useHttp } from "../http";

interface RequestData {
    id: number;
    phone: string;
    name: string;
    createdAt: string;
}

export const useGetManyRequest = () => {
    const { request, error, clearError } = useHttp();
    const [requests, setRequests] = useState<RequestData[]>([])

    const getRequests = async (e: any, secretKey: string) => {
        e.preventDefault();
        
        const res = await request('/request', 'GET', null, { secret: secretKey });
        if (!(res instanceof Error) && res.requests) {
            setRequests(res.requests);
            return true;
        }
        return false;
    }

    const removeRequest = (_id: number) => {
        setRequests((_requests) => _requests.filter(({ id }) => (_id !== id)))
    }

    return {
        getRequests, requests, error, removeRequest
    }
}