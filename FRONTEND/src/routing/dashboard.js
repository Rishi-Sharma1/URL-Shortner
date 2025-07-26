import { createRoute} from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import AuthPage from "../pages/AuthPage"
import DashboardPage from "../pages/DashboardPage"
import { checkAuth } from "../utils/helper"

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
  beforeLoad: checkAuth
  },
)

export default dashboardRoute