import { useCallback, useState } from "react";

export const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:7000/api";

export const useHttp = () => {
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState<null | { message: string }>( null );

    const request = useCallback(
        async ( url: string, method: string = "GET", body: any = null, headers: Record<string, string> = {} ) => {
            setLoading( true );
            try {
                if ( body ) {
                    body = JSON.stringify( body );
                    headers["Content-Type"] = "application/json";
                }

                const response = await fetch( API_URL + url, { method, body, headers } );
                const data = await response.json();

                setLoading( false );

                if ( !response.ok ) {
                    const message = data.message || "Что-то пошло не так";
                    setError( { message } );
                    return new Error( message );
                }

                return data;
            } catch ( e: any ) {
                setLoading( false );
                setError( { message: e.message } );
                throw e;
            }
        }, [] );

    const clearError = useCallback( () => setError( null ), [] );

    return { loading, request, error, clearError };
};