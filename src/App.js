import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./nav/default-nav";
import AppRoutes from './routes'


export default function App(){
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <React.Suspense
          fallback={<div className="text-center m-5 p-5">Loading...</div>}
        >
          <Switch>
            { AppRoutes.map(r => (
              <Route
                exact={r.exact}
                path={r.path}
                key={r.path}
                component={(props) => <r.component {...props} />}
              />
            ))}
          </Switch>
        </React.Suspense>
      </React.Fragment>
    </Router>
  );
}