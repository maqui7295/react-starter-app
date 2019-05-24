import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App.1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
                  <Route component={App} />
               </Router>,
 document.getElementById('root'));
registerServiceWorker();
