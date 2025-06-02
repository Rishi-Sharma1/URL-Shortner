import { createShortUrlWithtUser, createShortUrlWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";

export const createShortUrl = async (req,res, next)=>{
    try{
        const {url} = req.body
        const shortUrl = await createShortUrlWithoutUser(url)
        res.send(process.env.APP_URL+"/" + shortUrl)
    }catch(err){
        next(err)
    }
}

export const redirectFromShortUrl = async (req,res, next)=>{
    try{
        const {id}= req.params;
        const url = await getShortUrl(id)
        if(!url) throw new Error("Short URL not found")
        res.redirect(url.full_url)
    }catch(err){
        next(err)
    }
}