import User from "../models/user.model.js";
import { findUserByEmail, findUserById, createUser, findByEmailByPassword } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) throw new ConflictError("User already exists");

    const newUser = await createUser({ name, email, password });
    const token = signToken({ id: newUser._id });

    return { user: newUser, token };
};

export const loginUser = async (email, password) => {
    const user = await findByEmailByPassword(email, password);
    if (!user) throw new Error("Invalid Credentials");

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new Error("Invalid Credentials");

    const token = signToken({ id: user._id });
    return { token, user };
};