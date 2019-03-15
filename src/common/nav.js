import React from 'react'
import {NavLink} from 'react-router-dom'


export default function CustomNav(props){
    return <li className="nav-item">
             <NavLink className="nav-link text-capitalize" to={props.to}>{props.name}</NavLink>
          </li>
}