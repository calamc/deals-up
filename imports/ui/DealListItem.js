import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

const DealListItem = (props) => {
  return (
    <div>
      <h3>{ props.deal.title || 'Empty deal' }</h3>
      <p>{ moment(props.deal.updatedAt).format('DD/M/YY') }</p>
    </div>
  );
};
DealListItem.propTypes = {
  deal: React.PropTypes.object.isRequired
};

export default DealListItem;
