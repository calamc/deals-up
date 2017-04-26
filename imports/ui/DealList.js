import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Deals } from '../api/deals';
import DealListHeader from './DealListHeader';
import DealListItem from './DealListItem';

export const DealList = (props) => {
  return (
    <div>
      <DealListHeader/>
      {props.deals.map((deal) => {
        return <DealListItem key={deal._id} deal={deal}/>;
      })}
      DealList { props.deals.length }
    </div>
  );
};
DealList.propTypes = {
  deals: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  // get deals collection
  Meteor.subscribe('deals');

  return {
    deals: Deals.find().fetch()
  };
}, DealList);
