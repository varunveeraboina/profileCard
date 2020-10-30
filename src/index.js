import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import One from './One'; 
import * as serviceWorker from './serviceWorker';
import App from './App';
ReactDOM.render(
<App/>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
