import React, { Component } from 'react'
import AuthService from '../auth/auth.service';
import { NavLink, Route, Link } from 'react-router-dom'
import '../share/Share.css'
import ShowDashboard from './show.component';
import AccountComponent from './account.component';
import ProfileComponent from './profile.component';


export default class DashboardComponent extends Component {

    constructor(props) {
        super(props);
        this.userData = null
        this.match = this.props.match
    }

    componentWillMount(){

        let data = AuthService.show(this.props.match.params['email'])
        if(!data)
            window.location.href = '/'
        else
           this.userData = data
    }

    render() {

        return (
            <div className={'container-fluid'} id="main">
                <div className={'row'}>
                    <div className="col-12 col-md-12 col-lg-2 share_sidebar_fixed">
                        <div className="share_sidebar_sticky">
                            <NavLink className={'side_link'} to={`${this.match.url}`}>Dashboard</NavLink>
                            <NavLink className={'side_link'} to={`${this.match.url}/account`}>Account</NavLink>
                            <NavLink className={'side_link'} to={`${this.match.url}/profile`}>Profile</NavLink>
                            <NavLink className={'side_link'} to={`${this.match.url}/payments`}>Payment History</NavLink>
                            <NavLink className={'side_link'} to={`${this.match.url}/notification`}>Notification</NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-10 offset-lg-2 py-5">
                        <Route exact path={this.match.path} render={() => <ShowDashboard {...this.props} {...this.userData} /> } />
                        <Route path={`${this.match.path}/account`} render={() => <AccountComponent {...this.props} {...this.userData} /> } />
                        <Route path={`${this.match.path}/profile`} component={ProfileComponent} />
                    </div>
                </div>
            </div>
        );
    }
}