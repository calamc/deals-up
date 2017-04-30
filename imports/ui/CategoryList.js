import React from 'react';
import { Link } from 'react-router';
import { Mongo } from 'meteor/mongo';
import {Meteor } from 'meteor/meteor';
import { Deals } from '../api/deals';

class CategoryList extends Component {
  renderList() {
    return this.props.categories.map(categories => {
      return (
        <li className="list-group-item" key={categories._id} category={categories.category}>
          Category { categories._id }
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('categories');
  return {
    categories: Deals.find({}).fetch();
  }
}, CategoryList);
