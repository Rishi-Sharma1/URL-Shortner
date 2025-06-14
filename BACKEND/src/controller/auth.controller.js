import { cookieOptions } from "../config/config.js"
import {registerUser} from "../services/auth.service.js"
import wrapAsync from "../utils/wrapAsync.js"
import {loginUser} from "../services/auth.service.js"

export const register_user = wrapAsync(async(req,res)=>{
    const {name, email, password} = req.body
    const token=await registerUser(name, email, password)
    req.user=user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message:"Login Success"})
})

export const login_user = wrapAsync(async(req,res)=>{
    const {email, password} = req.body
    const {token, user} = await loginUser(email, password)
    req.user=user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message:"login success"})
})