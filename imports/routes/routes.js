import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Session } from 'meteor/session';

import { Router, Route, browserHistory } from 'react-router';

import Home from '../ui/Home';
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import Dashboard from '../ui/Dashboard';
import Log from '../ui/Log';
import Pnf from '../ui/Pnf';
import Deal from '../ui/Deal';
import PublicDealsList from '../ui/PublicDealsList';
import PublicDealsMain from '../ui/PublicDealsMain';

const onEnterDealPage = (nextState) => {
  Session.set('selectedDealId', nextState.params.id);
}
const onLeaveDealPage = () => {
  Session.set('selectedDealId', undefined);
}

//const unauthPages = ['/login', '/signup'];
//const authPages = ['/dashboard', '/deals'];

// const onEnterPrivatePage = () => {
//   if (!Meteor.userId()) {
//     browserHistory.replace('/');
//   }
// };
//
// const onEnterPubPage = () => {
//   if (Meteor.userId()) {
//     browserHistory.replace('/dashboard');
//   }
// };
// deal page
const onEnterLogPage = (nextState) => {
  Session.set('selLogId', nextState.params.id);
};
const onLeaveLogPage = () => {
  Session.set('selLogId', undefined);
};

export const onAuthChanged = (isAuth, curPgPrivacy) => {
  //const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthPage = curPgPrivacy === 'unauth';
  const isAuthPage = curPgPrivacy === 'auth';

  if (isUnauthPage && isAuth) {
    browserHistory.replace('/dashboard');
  } else if (isAuthPage && !isAuth) {
    browserHistory.replace('/');
  }
};
export const uniOnChange = (previousState, nextState) => {
  uniOnEnter(nextState);
};
export const uniOnEnter = (nextState) => {
  // -1 index back to 0
  const lastRoute = nextState.routes[nextState.routes.length - 1];
  Session.set('curPgPrivacy', lastRoute.secure);
};

export const routes = (
  <Router history={browserHistory}>
    <Route onEnter={uniOnEnter} onChange={uniOnChange}>
      <Route path="/" component={Home}/>
      <Route path="/deal/:dealId" component={PublicDealsMain} secure="unauth"/>
      <Route path="/signup" component={Signup} secure="unauth" />
      <Route path="/login" component={Login} secure="unauth" />
      <Route path="/dashboard" component={Dashboard} secure="auth" />
      <Route path="/deals" component={Deal} secure="auth" />
      <Route path="/deals/:id" component={Deal} secure="auth" onEnter={onEnterDealPage} onLeave={onLeaveDealPage}/>
      <Route path="/logs" component={Log} secure="auth" />
      <Route path="/logs/:id" component={Log} secure="auth" onEnter={onEnterLogPage} onLeave={onLeaveLogPage}/>
      <Route path="*" component={Pnf}/>
    </Route>
  </Router>
);
