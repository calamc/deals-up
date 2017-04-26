import { Mongo } from 'meteor/mongo';
import {Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

export const Deals = new Mongo.Collection('deals');

// server method
if (Meteor.isServer) {
  // create new publication for deals
  // ES5 function => need "this" keyword
  Meteor.publish('deals', function() {
    // check erson is authenticated
    // show them their deals
    return Deals.find({ ownerId: this.userId });
  });
}

Meteor.methods({
  'deals.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-add-deals');
    }
    // new SimpleSchema({
    //   _id: {
    //     type: String,
    //     min: 1
    //   },
    //   title: {
    //     type: String,
    //     min: 1,
    //     optional: true
    //   },
    //   description: {
    //     type: String,
    //     min: 1,
    //     max: 250,
    //     optional: true
    //   },
    //   price: {
    //     type: Number,
    //     optional: true
    //   }
    // }).validate({
    //   _id,
    //   title,
    //   description,
    //   price
    // });
    // Deals.insert({
    //   title,
    //   description,
    //   price,
    //   createdAt: moment().valueOf(),
    //   updatedAt: moment().valueOf(),
    //   ownerId: this.userId
    // });
    // return Deals.insert({
    //   title: '',
    //   description: '',
    //   //image: '',
    //   price: '',
    //   createdAt: moment().valueOf(), //new Date().getTime(),
    //   updatedAt: moment().valueOf(),
    //   ownerId: this.userId
    // });
    return Deals.insert({
      title: '',
      description: '',
      price: '',
      category: '',
      ownerId: this.userId,
      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf()
    });
  },
  'deals.remove'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-remove-deals')
    }
    new SimpleSchema({
      _id: {
        // validate that id is greater than 1 char
        type: String,
        min: 1
      }
    }).validate({_id});
    Deals.remove({_id, ownerId: this.userId});
  },
  'deals.update'(_id, dealUpdates) {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-update-deals')
    }
    new SimpleSchema({
      _id: {
        type: String
      },
      title: {
        type: String,
        optional: true
      },
      description: {
        type: String,
        optional: true
      },
      price: {
        type: Number,
        optional: true
      },
      category: {
        type: String,
        optional: true
      }
    }).validate({
      _id,
      // spread out th updates object
      ...dealUpdates
    });
    Deals.update({
      _id,
      ownerId: this.userId
    }, {
      $set: {
        updatedAt: moment().valueOf(),
        ...dealsUpdates
      }
    });
  }
});
