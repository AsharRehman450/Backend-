 import dotenv from"dotenv"
import express from "express"
import router from "./route/router.js";
import { connectDB } from "./database/database.js";
import cors from "cors";
 
dotenv.config()
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(cors());
app.use("/ashar", router);

connectDB()
app.listen(port,()=>{
    console.log("server is running",port); 
})