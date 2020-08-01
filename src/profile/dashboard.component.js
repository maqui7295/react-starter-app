import React from 'react'
import AuthService from '../auth/auth.service';
import { NavLink, Route } from 'react-router-dom'
import ShowDashboard from './show.component';
import AccountComponent from './account.component';
import ProfileComponent from './profile.component';


export default function DashboardComponent(props) {

    let userData = null, data = AuthService.show('user')
    
    if(!data)
        window.location.href = '/'
    else
        userData = data
 
    return (
        <div className={'container mt-5 py-5'} id="main">
            <div className={'row'}>
                <div className="col-12 col-md-12 col-lg-3 share_sidebar_fixed d-flex flex-lg-column">
                        <NavLink className={'side_link active'} to={`${props.match.url}`}>Dashboard</NavLink>
                        <NavLink className={'side_link'} to={`${props.match.url}/account`}>Account</NavLink>
                        <NavLink className={'side_link'} to={`${props.match.url}/profile`}>Profile</NavLink>
                        <NavLink className={'side_link'} to={`${props.match.url}/notification`}>Notification</NavLink>
                </div>
                <div className="col-12 col-md-12 col-lg-9">
                    <Route exact path={props.match.path} render={() => <ShowDashboard {...props} {...userData} /> } />
                    <Route path={`${props.match.path}/account`} render={() => <AccountComponent {...props} {...userData} /> } />
                    <Route path={`${props.match.path}/profile`} component={ProfileComponent} />
                    <Route path={`${props.match.path}/notification`} render={prop => <p>Notification</p> } />
                </div>
            </div>
        </div>
    );
   
}