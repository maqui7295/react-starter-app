import React from 'react'
import {Link} from 'react-router-dom'

const ShowDashboard = ({location, username, email, created}) => {

    return <div>
            {/* <h4 className={'alert alert-success text-center'}>{location.state ? location.state.message : "Welcome back"}</h4> */}
            <div className={"card px-3 py-4"}>
                <div className={'text-center'}>
                    <h4>Your Profile</h4>
                    <p>Username: {username}</p>
                    <p>email: {email}</p>
                    <p>created: {created}</p>
                    <Link to={`/profile/${email}/edit`}>Edit account</Link>
                </div>
            </div>
         </div>
}

export default ShowDashboard;
