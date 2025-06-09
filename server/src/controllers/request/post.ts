import { RequestRepository } from "./../../database/repositories";
import { Request, Response } from "express";

const phoneRegExp = /^\+?[78][\(\)\-0-9\s]{10,16}$/;

export async function postRequest( req: Request, res: Response ) {
    const { phone, name } = req.body;

    if (phoneRegExp.test(phone)) {
        const request = await RequestRepository.create({
            phone, name
        })

        return res.json( { message: "Заявка создана!", request } );
    }

    return res.status( 400 ).json( { message: "Некорректный запрос!" } );
}
