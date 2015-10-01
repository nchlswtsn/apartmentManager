'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var path = require('path'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  User = mongoose.model('User')

/**
 * Extend user's controller
 */
module.exports = _.extend(
  require('./users/users.authentication.server.controller'),
  require('./users/users.authorization.server.controller'),
  require('./users/users.password.server.controller'),
  require('./users/users.profile.server.controller')
);

// exports.apply = function(req, res) {
// 	console.log(req.body)
// 	  article.title = req.body.title;
// 	  article.content=req.body.content;
// 	  article.save(function (){
// 	  	res.json(article)
// 	  })
// }
