import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js"
import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url)=>{
    const shortUrl=generateNanoId(7);
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl, url)
    return shortUrl;
}

export const createShortUrlWithtUser = async (url, userId)=>{
    const shortUrl=generateNanoId(7);
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(url, shortUrl, userId)
    return shortUrl;
}