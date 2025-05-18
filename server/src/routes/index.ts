import express from "express";
import { requestRouter } from "./request";

const router = express.Router();

router.use( "/request", requestRouter );

export { router };