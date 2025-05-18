import { RequestRepository } from "./../../database/repositories";
import { Request, Response } from "express";

export async function getManyRequest( req: Request, res: Response ) {
    const requests = await RequestRepository.findAll();

    res.json( { message: `Найдено ${requests.length} запросов`, requests } );
}