import React from "react";
const DashboardComponent = React.lazy(() => import("./dashboard.component"));

const profileRoutes = [

  { path: "/dashboard", component: DashboardComponent },
 
];

export { profileRoutes, DashboardComponent };
