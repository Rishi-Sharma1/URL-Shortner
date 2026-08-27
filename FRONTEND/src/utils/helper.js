import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";

// Route guard for protected routes like /dashboard
export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;

        // 1. Check current Redux store
        let { isAuthenticated, user } = store.getState().auth;
        if (isAuthenticated && user) {
            return true;
        }

        // 2. Fallback check to server API /api/auth/me
        const response = await queryClient.fetchQuery({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
            staleTime: 0,
        });

        if (response && response.user) {
            store.dispatch(login(response.user));
            return true;
        }

        throw new Error("Unauthenticated");
    } catch (error) {
        if (error?.to) throw error; // Rethrow router redirects
        throw redirect({ to: "/auth" });
    }
};

// Route guard for auth pages: if already logged in, redirect to /dashboard
export const redirectIfAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;

        let { isAuthenticated, user } = store.getState().auth;
        if (isAuthenticated && user) {
            throw redirect({ to: "/dashboard" });
        }

        const response = await queryClient.fetchQuery({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
            staleTime: 0,
        });

        if (response && response.user) {
            store.dispatch(login(response.user));
            throw redirect({ to: "/dashboard" });
        }
    } catch (error) {
        if (error?.to) throw error; // Rethrow router redirects
    }
};