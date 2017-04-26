import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
//import { Deals } from '../api/deals';

export const DealListHeader = (props) => {
  return (
    <div>
        <button onClick={() => {
          props.meteorCall('deals.insert');}}>Create a deal</button>
    </div>
  );
};
DealListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired
};
export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  };
}, DealListHeader);
