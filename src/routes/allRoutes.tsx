import { Navigate } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../modules/pets";

// Auth Inner
import Page404 from "../modules/errors/pages/404";

//login
import PageExample from "modules/example/pages/PageExample";
import ForgetPasswordPage from "../modules/auth/pages/forgetPassword";
import Login from "../modules/auth/pages/login";
import Logout from "../modules/auth/pages/logout";
import Register from "../modules/auth/pages/register";

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  {
    path: "/example",
    exact: true,
    component: <PageExample />,
  },

  { path: "*", exact: true, component: <Page404 /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/sair", component: <Logout /> },
  { path: "/entrar", component: <Login /> },
  { path: "/recuperar-senha", component: <ForgetPasswordPage /> },
  { path: "/cadastro", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
