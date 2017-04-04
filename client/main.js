import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChanged } from '../imports/routes/routes';

Tracker.autorun(() => {
  const isAuth = !!Meteor.userId();
  onAuthChanged(isAuth);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
