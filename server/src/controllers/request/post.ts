import { RequestRepository } from "./../../database/repositories";
import { NextFunction, Request, Response } from "express";

const nameRegExp = /^[A-Z0-9\s]+$/i;
const phoneRegExp = /^[\+\-0-9\s]+$/;

export async function postRequest( req: Request, res: Response ) {
    const { phone, name } = req.body;

    if (nameRegExp.test(name) && phoneRegExp.test(phone)) {
        const request = await RequestRepository.create({
            phone, name
        })

        return res.json( { message: "Заявка создана!", request } );
    }

    return res.status( 400 ).json( { message: "Некорректный запрос!" } );
}
