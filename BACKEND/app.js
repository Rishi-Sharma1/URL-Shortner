import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from "./src/config/mongo.config.js";
import urlSchema from './src/models/short_url.model.js';
import short_url from './src/routes/short_url.route.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';


dotenv.config("./.env");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
app.use(cors());

app.use("/api/create", short_url);

app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");    
});

