//Step 1 : Create Server
import express from "express";
import dotenv from "dotenv";
import  { connectdb } from "./utils/database.js";
import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
import cors from "cors";
import userRoute from './routes/userRoute.js'


dotenv.config({
    path: "./utils/config.env",
})


// databaseConnection();
connectdb();

const app = express();


//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:3000", "https://netflix-five-pink-69.vercel.app"],
    credentials: true,
}
app.use(cors(corsOptions));

//API's
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})