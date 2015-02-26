/**
 * Module dependencies.
 */

var app = module.exports = require('lib/boot');
var http = require('http');
var config = require('lib/config');
var log = require('debug')('manager:root');

/**
 * Launch the server
 */

var port = config('port');

if (module === require.main) {
  http.createServer(app).listen(port, function() {
    log('Application started on port %d', port);
  });
}