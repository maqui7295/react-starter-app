import authRoutes from "./auth";
import homeRoutes from "./home";
import { profileRoutes } from './profile'

const AppRoutes = [

   ...homeRoutes,
   ...authRoutes,
   ...profileRoutes

]

export default AppRoutes