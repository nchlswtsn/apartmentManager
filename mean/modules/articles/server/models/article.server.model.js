'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: Number,
    default: '',
    trim: true
    // required: 'Title cannot be blank'
  },
  bedroom: {
    type: Number,
    default: '',
    trim: true
    // required: 'Bedroom cannot be blank'
  },
  bathroom: {
    type: Number,
    default: '',
    trim: true
    // required: 'Bathroom cannot be blank'
  },
  footage: {
    type: Number,
    default: '',
    trim: true
    // required: 'Footage cannot be blank'
  },
  rent: {
    type: Number,
    default: '',
    trim: true
    // required: 'Rent cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  tenant: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
