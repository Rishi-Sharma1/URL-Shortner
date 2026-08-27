import { createShortUrlWithUser, createShortUrlWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body;
    let shortUrl;
    if (req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug);
    } else {
        shortUrl = await createShortUrlWithoutUser(data.url);
    }

    const baseUrl = (process.env.APP_URL || `${req.protocol}://${req.get('host')}`).replace(/\/$/, '');
    res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` });
});

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const url = await getShortUrl(id);
    if (!url) {
        return next();
    }
    res.redirect(url.full_url);
});

export const createcustomShortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body;
    let shortUrl;
    if (req.user) {
        shortUrl = await createShortUrlWithUser(url, req.user._id, slug);
    } else {
        shortUrl = await createShortUrlWithoutUser(url, slug);
    }

    const baseUrl = (process.env.APP_URL || `${req.protocol}://${req.get('host')}`).replace(/\/$/, '');
    res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` });
});