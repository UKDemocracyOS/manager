/**
 * Module dependencies.
 */

var User = require('lib/models').User;

exports.exists = function(id, fn){
  User.findById(id).exec(function(err, user) {
    if (err) return fn(err);
    if (!user) return fn(null, false);
    fn(null, true);
  });
}
