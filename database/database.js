 import mongoose from "mongoose";

 export const connectDB = async ()=>{
    try {
       const MONGO_DB_URI = process.env.MONGO_DB_URl
       mongoose.connect(MONGO_DB_URI)
       mongoose.connection.on("connected",()=>{
        console.log("mongodb connected");
       });
       mongoose.connection.on("error",(err)=>{
        console.log(err);
        
       });

    } catch (error) {
        console.log(error);
        
    }
}