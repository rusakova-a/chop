import { Sequelize } from "sequelize-typescript";
import { Request } from "./models";
import { getEnv } from "./../utils";

export const Database = new Sequelize(
    getEnv( process.env.DB_NAME ),
    getEnv( process.env.DB_USER ),
    getEnv( process.env.DB_PASSWORD ),
    {
        models: [ Request ],
        repositoryMode: true,
        dialect: "postgres",
        host: getEnv( process.env.DB_HOST ),
        port: parseInt( getEnv( process.env.DB_PORT ) )
    }
);