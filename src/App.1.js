import React, { useState, useEffect } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

import Navbar from "./nav/default-nav.1";

import Auth from "./auth/oauth-demo/auth";
import Callback from "./auth/oauth-demo/callback";

function Home(props) {
  const { isAuthenticated, login } = props.auth;

  return (
    <div>
      <h1>This is the home page</h1>
      {isAuthenticated() ? (
        <Link to="/profile">View Profile</Link>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

function Profile(props) {
  const { auth } = props;
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUserProfile();
  });

  function loadUserProfile() {
    auth.getProfile((profile, error) => {
      setProfile(profile);
      setError(error);
    });
  }

  if (!profile) return null;

  return (
    <div>
      <h1>This is the profile page</h1>
      <p>{profile.nickname}</p>
      <img
        style={{ maxWidth: 50, maxHeight: 50 }}
        src={profile.picture}
        alt="profile pic"
      />
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}

export default function App(props) {
  // import the auth from oauth-demo and pass it down
  const auth = new Auth(props.history);

  return (
    <React.Fragment>
      <Navbar auth={auth} />
      <Route path="/" exact render={props => <Home auth={auth} {...props} />} />
      <Route
        path="/profile"
        render={props =>
          auth.isAuthenticated() ? (
            <Profile auth={auth} {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route path="/public" component={Public} />
      <Route
        path="/private"
        render={props =>
          auth.isAuthenticated() ? (
            <Private auth={auth} {...props} />
          ) : (
            auth.login()
          )
        }
      />
      <Route
        path="/courses"
        render={props =>
          auth.isAuthenticated() && auth.userHasScopes(["read:courses"]) ? (
            <Courses auth={auth} {...props} />
          ) : (
            auth.login()
          )
        }
      />
      <Route
        path="/callback"
        render={props => <Callback auth={auth} {...props} />}
      />
    </React.Fragment>
  );
}

// consume api

function Public(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/public")
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not okay!");
      })
      .then(res => setMessage(res.message))
      .catch(error => setMessage(error.message));
  });

  return <div>{message}</div>;
}

function Private(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/private", {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()} ` }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not okay!");
      })
      .then(res => setMessage(res.message))
      .catch(error => setMessage(error.message));
  });

  return <div>{message}</div>;
}
function Courses(props) {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/course", {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()} ` }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not okay!");
      })
      .then(res => setCourses(res.courses))
      .catch(error => setError(error.message));
  });

  useEffect(() => {
    fetch("/admin", {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()} ` }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not okay!");
      })
      .then(console.log)
      .catch(error => setError(error.message));
  });

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}

function PrivateRoute({ component: Component, auth, scopes, ...rest }) {
 // roles validation can be done with this component as well

  return (
    <Route
      {...rest}
      render={props => {
        // 1. Redirect to login if not logged in
        if (!auth.isAuthenticated()) return auth.login();

        // 2. Display message if the user lacks scopes
        if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          return (
            <h1>
              Unauthorized - you need the following scopes to view this page:{" "}
              {scopes.join(",")}.
            </h1>
          );
        }

        // 3. Render Component
        return <Component auth={auth} {...props} />
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  scopes: PropTypes.array,
}

PrivateRoute.defaultProps = {
  scopes: []
}