import axiosInstance from "./axiosInstance"

export const createShortUrl = async (url) => {
    const {data} = await axiosInstance.post("/api/create", {url})
    return data.shortUrl
}