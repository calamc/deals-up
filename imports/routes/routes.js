import { Meteor } from 'meteor/meteor';
import React from 'react';

import { Router, Route, browserHistory } from 'react-router';

import Home from '../ui/Home';
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import Dashboard from '../ui/Dashboard';
import Deal from '../ui/Deal';
import Pnf from '../ui/Pnf';

const unauthPages = ['/login', '/signup'];
const authPages = ['/dashboard', '/deals'];

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const onEnterPubPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashboard');
  }
};

export const onAuthChanged = (isAuth) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthPage = unauthPages.includes(pathname);
  const isAuthPage = authPages.includes(pathname);

  if (isUnauthPage && isAuth) {
    browserHistory.replace('/dashboard');
  } else if (isAuthPage && !isAuth) {
    browserHistory.replace('/');
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPubPage}/>
    <Route path="/login" component={Login} onEnter={onEnterPubPage}/>
    <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
    <Route path="/deals" component={Deal} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={Pnf}/>
  </Router>
)
