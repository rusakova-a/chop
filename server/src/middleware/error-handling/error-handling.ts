import { NextFunction, Request, Response } from "express";
import { Error } from "sequelize";

export function errorHandlingMiddleware( err: Error, req: Request, res: Response, next: NextFunction ) {
    if ( res.headersSent ) {
        return next( err );
    }

    return res.status( 500 ).json( { message: "Непредвиденная ошибка сервера!" } );
}