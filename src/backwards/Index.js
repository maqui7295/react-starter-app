import React, { Component, Suspense, lazy  } from 'react';
// import Loadable from 'react-loadable'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


import Navbar from './home/Navbar'
// import Home from './home/Home'
// import About from './home/About'
import Contact from './home/Contact'
import Team from './home/Team'
import Sponsor from './home/Sponsor'
import Donate from './home/Donate'
import Share from './share/Share';
import Showcase from './showcase/Showcase';
import Connect from './connect/Connect';
import RegisterComponent from './auth/register.component'
import Forgot from './auth/forgot'
import ResetPassword from './auth/reset'
import ProductList, { ProductDetail, productLists } from './products/products';
import LoginComponent from './auth/login.component';
import DashboardComponent from './profile/dashboard.component';

const Home = lazy(() => import('./home/Home'));
const About = lazy(() => import('./home/About'));


function getProduct(id){
 
   return productLists.find(product => product.id === +id )

}

const Index = () => (
  <Router>
    <div>
        <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/team" component={Team}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/donate" component={Donate}/>
                <Route  path="/sponsor" component={Sponsor}/>
                <Route  path="/share-and-sell" component={Share}/>
                <Route  path="/showcase" component={Showcase}/>
                <Route  path="/connect" component={Connect}/>
                <Route  path="/login" component={LoginComponent}/>
                <Route  path="/register" component={RegisterComponent}/>
                <Route  path="/forgot-password" component={Forgot}/>
                <Route  path="/reset-password" component={ResetPassword}/>
                <Route  path="/dashboard/:email" component={DashboardComponent}/>
                <Route  exact path="/products" component={ProductList}/>
                <Route  path="/products/:id" component={({match}) => <ProductDetail product={getProduct(match.params.id)} /> } />
          </Switch>
        </Suspense>
    </div>

  </Router>
)

export default Index;