import { Meteor } from 'meteor/meteor';

// import users validation simpleschema
import '../imports/api/users';
import '../imports/start/simpl-schema-config.js';
import '../imports/api/logs';

Meteor.startup(() => {
  // code to run on server at startup
});
