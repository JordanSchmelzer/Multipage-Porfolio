import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";
import createHttpError, {isHttpError} from "http-errors";


const app = express(); //the server

app.use(morgan("dev")); //use this for printing logs of endpoints on middleware use

app.use(express.json()); 

app.use("/api/notes", notesRoutes); 

// middle ware, must go between get and other use w/ error handle
app.use((req,res,next)=>{
    next(createHttpError(404,"Endpoint not found"))
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occured";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({error: errorMessage});
});

export default app; 