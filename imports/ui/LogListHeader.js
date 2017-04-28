import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
//import { Deals } from '../api/deals';
import { Session } from 'meteor/session';

export const LogListHeader = (props) => {
  return (
    <div className="log__itemListHeader">
        <button className="btn" onClick={() => {
          props.meteorCall('logs.insert', (err, res) => {
            if (res) {
              // set selected deal id
              props.Session.set('selLogId', res);
            }
          });}}>New Log</button>
    </div>
  );
};
LogListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired,
  Session: React.PropTypes.object.isRequired
};
export default createContainer(() => {
  return {
    meteorCall: Meteor.call,
    Session
  };
}, LogListHeader);
