import { Navigate } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../modules/pets";

// Auth Inner
import Index from "../modules/errors/pages/404";

//login
import ForgetPasswordPage from "../modules/auth/pages/forgetPassword/ForgetPassword";
import Login from "../modules/auth/pages/login/Login";
import Logout from "../modules/auth/pages/logout/Logout";
import Register from "../modules/auth/pages/register/Register";

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },

  { path: "*", exact: true, component: <Index /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/sair", component: <Logout /> },
  { path: "/entrar", component: <Login /> },
  { path: "/recuperar-senha", component: <ForgetPasswordPage /> },
  { path: "/cadastro", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
