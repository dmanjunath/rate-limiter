var RateLimiter = require('../rate_limit.js');
var assert = require('assert');
var request = require('request');

var config = require('../config.json');

var oauth = { consumer_key: config.twitter.consumerKey,
              consumer_secret: config.twitter.consumerSecret,
              token: config.twitter.token,
              token_secret: config.twitter.tokenSecret};


var getfriends = new RateLimiter(2, 5000);

var callCount = 0;
var callGetFriends = function(username, callback) {
	var url  = 'https://api.twitter.com/1.1/friends/ids.json?cursor=-1&screen_name='+username+'&count=5000';
	console.log(url);
	request.get({url: url, oauth: oauth, json: true}, function(error, res, body) {
		callback(body);
	})
}

getfriends.callWithLimit(callGetFriends, ["panacheswag", function(data){
	console.log(data);
}]);
getfriends.callWithLimit(callGetFriends, ["onkis", function(data){
	console.log(data);
}]);
assert.equal(callCount, 2);
getfriends.callWithLimit(callGetFriends, ["andreyee", function(data){
	console.log(data);
}]);
getfriends.callWithLimit(callGetFriends, ["izs", function(data){
	console.log(data);
}]);
setTimeout(function() {
	assert.equal(callCount, 4)
}, 10500);
getfriends.callWithLimit(callGetFriends, ["panacheswag", function(data){
	console.log(data);
}]);
