import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
//import { Deals } from '../api/deals';
import { Session } from 'meteor/session';

export const DealListHeader = (props) => {
  return (
    <div>
        <button onClick={() => {
          props.meteorCall('deals.insert', (err, res) => {
            if (res) {
              // set selected deal id
              props.Session.set('selDealId', res);
            }
          });}}>New Deal</button>
    </div>
  );
};
DealListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired,
  Session: React.PropTypes.object.isRequired
};
export default createContainer(() => {
  return {
    meteorCall: Meteor.call,
    Session
  };
}, DealListHeader);
