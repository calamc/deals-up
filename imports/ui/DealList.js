import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Deals } from '../api/deals';
import DealListHeader from './DealListHeader';
import DealListItem from './DealListItem';
import DealEmpty from './DealEmpty';
import { Session } from 'meteor/session';

export const DealList = (props) => {
  return (
    <div>

      <DealListHeader/>

      {/* show empty box message */}
      { props.deals.length === 0 ? <DealEmpty/> : undefined}

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
  const selDealId = Session.get('selDealId');
  // get deals collection
  Meteor.subscribe('deals');

  return {
    // map, pass in function, check if deal is selected
    deals: Deals.find({}, {
      sort: {
        updatedAt: -1
      }
    }).fetch().map((deal) => {
      return {
        ...deal,
        sel: deal._id === selDealId
      };
    })
  };
}, DealList);
