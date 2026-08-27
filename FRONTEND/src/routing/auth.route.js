import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import AuthPage from "../pages/AuthPage";
import { redirectIfAuth } from "../utils/helper.js";

export const authRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth',
    component: AuthPage,
    beforeLoad: redirectIfAuth
});
