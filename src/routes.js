import authRoutes from "./auth";
import homeRoutes from "./home";
import { profileRoutes } from './profile'

// import React from 'react';

const AppRoutes = [

   ...homeRoutes,
   ...authRoutes,
   ...profileRoutes,

]

export default AppRoutes