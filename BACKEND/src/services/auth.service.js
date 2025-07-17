import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import { findUserByEmail, findUserById, createUser } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js"
import { signToken } from "../utils/helper.js"

export const registerUser = async(name,email,password)=>{
    const user= await findUserByEmail({email: email})
    if(user) throw new ConflictError("User already exist")
    
    const newUser = await createUser({name, email, password})
    
    const token = signToken({id: newUser._id})

    return token
}


export const loginUser = async(email, password)=>{
    const user = await findUserById(email)
    if(!user) throw new Error("Invalid Credentials")
    const isPasswordValid = await user.comparePassword(password)
    if(!isPasswordValid) throw new Error("Invalid Credentials")
    const token = signToken({id: user._id})
    return {token,user}
}