import express from "express";
import { createShortUrl, createcustomShortUrl } from "../controller/short_url.controller.js";
const router = express.Router();

router.post("/", createShortUrl)
router.post("/", createcustomShortUrl)

export default router;