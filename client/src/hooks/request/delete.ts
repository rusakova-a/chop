import { useCallback } from 'react';
import { useHttp } from '../http';

export const useDeleteRequest = () => {
    const { request } = useHttp();

    const deleteRequest = useCallback(
        async (id: number) => {
            const res = await request('/request', 'DELETE', { requestId: id });
            if (!(res instanceof Error)) {
                return true;
            }
            return false;
        },
        [request]
    );

    return {
        deleteRequest,
    };
};
