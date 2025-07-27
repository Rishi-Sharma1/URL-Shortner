import { cookieOptions } from "../config/config.js"
import {registerUser} from "../services/auth.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"
import {loginUser} from "../services/auth.service.js"

export const register_user = wrapAsync(async(req,res)=>{
    const {name, email, password} = req.body;
    const { user, token } = await registerUser(name, email, password); // <-- destructure both
    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({ user });
})

export const login_user = wrapAsync(async(req,res)=>{
    const {email, password} = req.body
    const {token, user} = await loginUser(email, password)
    req.user=user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({user:user, message:"login success"})
})

export const logout_user = wrapAsync(async(req,res)=>{
    res.clearCookie("accessToken", cookieOptions)
    res.status(200).json({message:"logout success"})
})

export const get_current_user = wrapAsync(async(req,res)=>{
    if(!req.user) return res.status(401).json({message:"Unauthorized"})
    res.status(200).json({user:req.user})
})
