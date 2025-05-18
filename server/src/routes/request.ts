import { deleteRequest, postRequest, getManyRequest } from "./../controllers";
import { checkSecretKey } from "./../middleware";
import { Router } from "express";

const requestRouter = Router();

// [GET]

requestRouter.get( "/", checkSecretKey, getManyRequest );

// [POST]

requestRouter.post( "/", postRequest );

// [DELETE]

requestRouter.delete( "/", checkSecretKey, deleteRequest );

export { requestRouter };
