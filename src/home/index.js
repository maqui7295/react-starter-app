import React from 'react'
// import Home from './home'
// import About from './about'
import Contact from './contact'
import Services from './services'
import Team from './team';
import Terms from './terms';
import Privacy from './privacy';
const Home = React.lazy(() => import("./home"));
const About = React.lazy(() => import("./about"));


const homeRoutes = [
    { path: "/", component: Home, exact: true },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/services", component: Services },
];

export { Home, About, Contact, Services, Team, Terms, Privacy }

export default homeRoutes