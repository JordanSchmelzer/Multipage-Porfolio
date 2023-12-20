// we right in curly braces b/c there are multiple things from module to export, we can export more than one thing from package by comma
import {cleanEnv} from "envalid";
import {port,str} from "envalid/dist/validators";

export default cleanEnv(process.env,{
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
})