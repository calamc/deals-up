import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Session } from 'meteor/session';

export const DealListItem = (props) => {
  return (
    <div onClick={() => {
      props.Session.set('selDealId', props.deal._id);
    }}>
      <h3>{ props.deal.title || 'Empty deal' }</h3>
      
      { props.deal.sel ? 'Deal selected' : undefined}
      <p>{ moment(props.deal.updatedAt).format('DD/M/YY') }</p>
    </div>
  );
};
DealListItem.propTypes = {
  deal: React.PropTypes.object.isRequired,
  Session: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  return { Session };
}, DealListItem);
