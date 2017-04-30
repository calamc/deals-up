import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Deals } from '../api/deals';

class PublicDealsList extends React.Component {
  renderAllDeals() {
    return this.props.publicDeal.map(deal => {
      const url = `/${deal._id}`;

      return (
        <Link to={url} className="list-group-item" key={deal._id}>Deal Name: {deal.title}</Link>
      )
    })
  }
  render () {
    console.log(this.props.publicDeal);
    return (
      <div>
        <ul className="list-group">
          {this.renderAllDeals()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('publicDeal');

  return  {
    publicDeal: Deals.find({}).fetch()
  }
}, PublicDealsList);
