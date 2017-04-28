import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import '../imports/start/simpl-schema-config.js';
import { routes, onAuthChanged } from '../imports/routes/routes';

Tracker.autorun(() => {
  const isAuth = !!Meteor.userId();
  const curPgPrivacy = Session.get('curPgPrivacy');
  onAuthChanged(isAuth, curPgPrivacy);
});
Tracker.autorun(() => {
  const selLogId = Session.get('selLogId');
  if (selLogId) {
    browserHistory.replace(`/logs/${selLogId}`);
  }
});

Meteor.startup(() => {
  Session.set('selLogId', undefined);
  ReactDOM.render(routes, document.getElementById('app'));
});
