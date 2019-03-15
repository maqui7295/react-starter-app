import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import './Share.css'
import Content from './Content'
import Home from './Home'


const Share = ({ match }) => (
    <div className={'container-fluid'}>
        <div className="row">
            <div className="col-12 col-md-12 col-lg-2 share_sidebar_fixed">
                <div className="share_sidebar_sticky">
                    <NavLink className={'side_link'} to={`${match.url}/history-culture`}>Culture</NavLink>
                    <NavLink className={'side_link'} to={`${match.url}/art`}>Art</NavLink>
                    <NavLink className={'side_link'} to={`${match.url}/music`}>Music</NavLink>
                    <NavLink className={'side_link'} to={`${match.url}/dance`}>Dance</NavLink>
                    <NavLink className={'side_link'} to={`${match.url}/drama`}>Drama</NavLink>
                </div>

            </div>
            <div className="col-12 col-md-12 col-lg-10 offset-lg-2">
                <Route exact path={`${match.path}/:topicId`} component={Content} />
                <Route exact path={match.path} component={Home} />
            </div>
        </div>
    </div>
)

export default Share;
