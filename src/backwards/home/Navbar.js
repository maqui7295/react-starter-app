import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {

        /* Set the width of the side navigation to 250px */
    openSideNav(id) {
        document.getElementById(id).style.width = "250px";
    }
    /* Set the width of the side navigation to 0 */
    closeSideNav(e, id) {
        e.preventDefault();
        document.getElementById(id).style.width = "0";
    }

    openTopNav() {
        document.getElementById("myNav").style.height = "100%";
    }

    closeTopNav(e) {
        document.getElementById("myNav").style.height = "0%";
    }

    render() {
        return ( 
            <header className={'music_header'}>
                <nav className="music_nav">
                    <div className="music_nav_logo">
                        <NavLink to="/" className='logo'>Logo</NavLink>
                    </div>
                    <ul className="music_nav_list mb-0">
                        <NavLink to="/share-and-sell" className='music_link'>Share</NavLink>
                        <NavLink to="/showcase" className='music_link'>Showcase</NavLink>
                        <NavLink to="/connect" className='music_link'>Connect</NavLink>
                        <NavLink to="/products" className='music_link'>Products</NavLink>
                        <NavLink to="/login" className='music_link'>Sign in</NavLink>
                        <NavLink to="/register" className='music_link'>Register</NavLink>
                        <NavLink to="#" className='music_link dashboard openSideNav'  onClick={(e) => this.openSideNav('profileNav') }>Dashboard</NavLink>
                        <span className="openTopNav" onClick={this.openTopNav}>&#9776;</span>
                    </ul>

                </nav>

                <div id="myNav" className="overlay" role="navigation">
                    <NavLink to="#" className="closebtn" onClick={this.closeTopNav}>&times;</NavLink>
                    <div className="overlay-content">
                        <NavLink className={'top_link'} onClick={this.closeTopNav} to="/">Home</NavLink>
                        <NavLink className={'top_link'} onClick={this.closeTopNav} to="/about">About</NavLink>
                        <NavLink className={'top_link'} onClick={this.closeTopNav} to="/team">Team</NavLink>
                        <NavLink className={'top_link'} onClick={this.closeTopNav} to="/contact">Contact</NavLink>
                        <NavLink className={'top_link'} onClick={this.closeTopNav} to="/sponsor">Sponsor</NavLink>
                        <NavLink className={'top_link'} onClick={this.closeTopNav} to="/donate">Donate</NavLink>
                    </div>
                </div>

                <div id="profileNav" className="sidenav" role="navigation">
                    <NavLink to="#" className="closebtn" onClick={(e) => this.closeSideNav(e, 'profileNav') }>&times;</NavLink>
                    <NavLink className={'side_link'} to="#">Profile</NavLink>
                    <NavLink className={'side_link'} to="#">Preferences</NavLink>
                    <NavLink className={'side_link'} to="#">Notification</NavLink>
                    <NavLink className={'side_link'} to="#">Logout</NavLink>
                </div>
                
            </header>
        );
    }
}

