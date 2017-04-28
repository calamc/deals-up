import { Mongo } from 'meteor/mongo';
import {Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

export const Logs = new Mongo.Collection('logs');

// server method
if (Meteor.isServer) {
  // create new publication for deals
  // ES5 function => need "this" keyword
  Meteor.publish('logs', function() {
    // check erson is authenticated
    // show them their deals
    return Logs.find({ ownerId: this.userId });
  });
}

Meteor.methods({
  'logs.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-add-logs');
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
    return Logs.insert({
      title: '',
      description: '',
      // price: '',
      // category: '',
      // image: '',
      ownerId: this.userId,
      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf()
    });
  },
  'logs.remove'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-remove-logs')
    }
    new SimpleSchema({
      _id: {
        // validate that id is greater than 1 char
        type: String,
        min: 1
      }
    }).validate({_id});
    Logs.remove({_id, ownerId: this.userId});
  },
  'logs.update'(_id, updates) {
    if (!this.userId) {
      throw new Meteor.Error('you-are-not-allowed-to-update-logs')
    }
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      title: {
        type: String,
        optional: true
      },
      description: {
        type: String,
        optional: true
      }
      // price: {
      //   type: String,
      //   optional: true
      // },
      // category: {
      //   type: String,
      //   optional: true,
      //   allowedValues: ['DIY', 'Clothing', 'Electronics', 'Sports', 'Shoes', 'Food', 'Music']
      // },
      // image: {
      //   type: String,
      //   optional: true
      // }
    }).validate({
      _id,
      // spread out th updates object
      ...updates
    });

    Logs.update({
      _id,
      ownerId: this.userId
    }, {
      $set: {
        updatedAt: moment().valueOf(),
        ...updates
      }
    });
  }
});
