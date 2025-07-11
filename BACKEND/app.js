import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from "./src/config/mongo.config.js";
import auth_routes from './src/routes/auth.routes.js';
import short_url from './src/routes/short_url.route.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

dotenv.config("./.env");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(cookieParser())
app.use(attachUser)

app.use("/api/auth", auth_routes)
app.use("/api/create", short_url);

app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");    
});

