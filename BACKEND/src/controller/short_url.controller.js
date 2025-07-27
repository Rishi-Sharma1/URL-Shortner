import { createShortUrlWithUser, createShortUrlWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import shortUrl from "../models/short_url.model.js";


export const createShortUrl = wrapAsync( async (req,res)=>{
    
        const data = req.body
        let shortUrl;
        if(req.user){
                shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug)
        }
        else{
                shortUrl = await createShortUrlWithoutUser(data.url)
        }
        
        res.status(200).json({shortUrl : process.env.APP_URL+"/" + shortUrl})
})


export const redirectFromShortUrl = wrapAsync (async (req,res, next)=>{
    
        const {id}= req.params;
        const url = await getShortUrl(id)
        if(!url) throw new Error("Short URL not found")
        res.redirect(url.full_url)

})

export const createcustomShortUrl = wrapAsync(async(req,res)=>{
        const {url, slug} = req.body
        if(req.user){
                const shortUrl = await createShortUrlWithUser(url, slug, req.user)
        } 
        else{
                const shortUrl = await createShortUrlWithoutUser(url, slug)
        }
        res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})