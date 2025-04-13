import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv.config({
//     path: 'config.env',
// });

export const connectdb =()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to mongoDB database");
    }).catch((err)=>{
        console.log(err);
    })
};