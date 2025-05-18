require( "dotenv" ).config();
import { Database } from "./database";
import { getEnv } from "./utils";
import { errorHandlingMiddleware } from "./middleware";
import cors from "cors";
import express from "express";
import { router } from "./routes";

const PORT = getEnv( process.env.PORT ) || 5000;
const app = express();

// Routes
app.use( cors( {
    credentials: true, origin: getEnv( process.env.CLIENT_URL )
} ) );
app.use( express.json() );
app.use( "/api", router );

app.use( errorHandlingMiddleware );

const start = async () => {
    try {
        await Database.authenticate();
        await Database.sync();
        app.listen( PORT,
            () => console.log( `Server started on port ${ PORT }` ) );
    } catch ( e ) {
        console.log( e );
    }
};

start();