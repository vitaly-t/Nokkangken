import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './modules/app/App.jsx';
import Landing from './modules/landing/Landing.jsx';
import Login from './modules/login/Login.jsx';
import Signup from './modules/signup/Signup.jsx';
import Locations from './modules/locations/Locations.jsx';
import Home from './modules/home/Home.jsx';


const store = configureStore();

const root = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Landing}>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
      </Route>
      <Route path='/home' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/locations' component={Locations}/>
      </Route>
    </Router>
  </Provider>,
  root
);