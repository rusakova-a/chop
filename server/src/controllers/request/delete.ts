import { RequestRepository } from "./../../database/repositories";
import { Request, Response } from "express";

export async function deleteRequest( req: Request, res: Response ) {
    const { requestId } = req.body;

    const request = await RequestRepository.findByPk( requestId );
    if ( !request ) {
        return res.status( 400 ).json( { message: "Звонок не найден!" } );
    }

    await request.destroy();

    res.json( { message: "Звонок удален!" } );
}