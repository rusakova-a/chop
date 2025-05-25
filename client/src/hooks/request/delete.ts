import { useHttp } from "../http";

export const useDeleteRequest = () => {
    const { request } = useHttp();

    const deleteRequest = async (id: number, secretKey: string) => {        
        const res = await request('/request', 'DELETE', { requestId: id }, { secret: secretKey });
        if (!(res instanceof Error)) {
            return true
        }
        return false;
    }

    return {
        deleteRequest
    }
}