import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './redux/actions/actionCreators'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
