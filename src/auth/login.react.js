import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../forms/prebuilt/login-form';

/**
 * The Login component
 * @See the Register component for more details
 * @param {*} props 
 */
export default function LoginPage({ history }) {

    const endpoint = 'http://demo.endpoint.com'
    // const redirectTo = { pathname: '/profile' }

    function login(data){
      console.log(data)
    }
 
    return (
      <div
        className={"container py-5 my-3"}
        id="main"
      >
        <div className={"row justify-content-center"}>
          <div className={"col-12 col-md-6 col-lg-4 card px-3 py-4"}>
            <div className={"text-center"}>
              <h4>Sign in</h4>
            </div>

            <LoginForm login={login} endpoint={endpoint} />

            <div className={"row"}>
              <div className={"col-6"}>
                <p>
                  <Link to={"/forgot-password"}>Forgot password?</Link>
                </p>
              </div>
              <div className={"col-6 text-right"}>
                <p>
                  <Link to={"/register"}>Yet to register?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
 
}