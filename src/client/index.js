import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/user/App';
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
