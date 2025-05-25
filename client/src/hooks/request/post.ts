import { useEffect, useState } from "react";
import { useHttp } from "../http";

interface FormData {
    phone: string;
    name: string;
}

export const usePostRequest = () => {
    const { request, error, clearError } = useHttp();
    const [isFormDataSend, setIsFormDataSend] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        phone: '',
        name: ''
    })

    const sendFormData = async (e: any) => {
        e.preventDefault();
        
        const res = await request('/request', 'POST', formData);
        if (!(res instanceof Error) && res.request) {
            setIsFormDataSend(true);
        }
    }

    useEffect(() => {
        if (error) {
            clearError();
        }
    }, [formData])

    return {
        formData, setFormData, isFormDataSend, sendFormData, error
    }
}