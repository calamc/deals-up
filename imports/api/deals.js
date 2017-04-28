import { Mongo } from 'meteor/mongo';
import {Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

export const Deals = new Mongo.Collection('deals');
