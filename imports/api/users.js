import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

export const validateNewUser = (user) => {
  // User will only ever have one email on this app
  const email = user.emails[0].address;
  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ email });
  return true;
};
if (Meteor.isServer) {
  Accounts.validateNewUser(validateNewUser);
}

// Accounts.validateNewUser((user) => {
//   // Every user has only 1 email address
//   const email = user.emails[0].address;
//   try {
//   new SimpleSchema({
//     email: {
//       type: String,
//       regEx: SimpleSchema.RegEx.Email
//     }
//   }).validate({ email });
//     } catch (e) {
//       throw new Meteor.Error(400, e.message);
//       }
//       return true;
// });
