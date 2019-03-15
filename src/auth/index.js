import RegisterComponent from "./register.react";
import ForgotPasswordComponent from "./forgot-password.react";
import ResetPasswordComponent from "./reset-password.react";
import LoginComponent from "./login.react";

// const Home = React.lazy(() => import("./home"));
// const About = React.lazy(() => import("./about"));

const authRoutes = [
  { path: "/register", component: RegisterComponent },
  { path: "/login", component: LoginComponent },
  { path: "/reset-password", component: ForgotPasswordComponent },
  { path: "/forgot-password", component: ResetPasswordComponent }
];

export default authRoutes

export { 
    RegisterComponent, 
    LoginComponent,
    ForgotPasswordComponent, 
    ResetPasswordComponent 
}
