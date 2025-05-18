import type { NextFunction, Request, Response } from "express";
import { getEnv } from "../../utils";

const SECRET_KEY = getEnv(process.env.SECRET_KEY) || 'secret-key';

export function checkSecretKey( req: Request, res: Response, next: NextFunction ) {
    if ( req.method === "OPTIONS" ) {
        return next();
    }

    const token = req.headers.secret;

    if ( token && token === SECRET_KEY) {
        return next();
    }

    return res.status( 401 ).json( { message: "Не авторизован" } );
}