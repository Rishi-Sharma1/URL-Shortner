import { redirect } from "@tanstack/react-router";
import { login } from "../store/slice/authSlice";
import { getCurrentUser } from "../api/user.api.js";


export const checkAuth = async (context) =>{
    try{
    const {store, queryClient} = context
    const user = await queryClient.ensureQueryData({
        queryKey:['curentUser'],
        queryFn: getCurrentUser
    });
    if(!user) return false
    store.dispatch(login(user));
    const {isAuthenticated}=store.getState().auth
    if(!isAuthenticated) return false
    return true
    } catch (error) {
        return redirect({to:"/auth"})
        

}}