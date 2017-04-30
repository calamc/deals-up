import { Mongo } from 'meteor/mongo';
import {Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

export const Deals = new Mongo.Collection('deals');

if (Meteor.isServer) {
  Meteor.publish('deals', function () {
    return Deals.find({ userId: this.userId });
  });
}

Meteor.methods({
  'deals.insert'(title, description, category, location, price) {
    if (!this.userId) {
      throw new Meteor.Error('not-allowed');
    }

    new SimpleSchema({
      title: {
        type: String,
        optional: true
      },
      description: {
        type: String,
        optional: true
      },
      category: {
        type: String,
        optional: true
      },
      location: {
        type: String,
        optional: true
      },
      price: {
        type: String,
        optional: true
      }
    }).validate({
      title,
      description,
      category,
      location,
      price
    });

    Deals.insert({
      title,
      description,
      category,
      location,
      price,
      createdAt: Date(),
      visible: true,
      // dealViews: 0,
      userId: this.userId
    });
  },
  'deals.determineVisibilty'(_id, visible) {
    if (!this.userId) {
      throw new Meteor.Error('not-allowed');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({ _id, visible });

    Deals.update({
      _id,
      userId: this.userId
    },{
        $set: { visible }
    });
  },
  'deals.remove'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-remove-deals')
    }
    new SimpleSchema({
      _id: {
        // validate that id is greater than 1 char and remove
        type: String,
        min: 1
      }
    }).validate({_id});

    Deals.remove({_id, userId: this.userId});
  }
});
