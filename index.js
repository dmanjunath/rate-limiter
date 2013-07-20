var request = require('request');
var moment = require('moment');
var config = require('./config.json')

var oauth = { consumer_key: config.twitter.consumerKey,
              consumer_secret: config.twitter.consumerSecret,
              token: config.twitter.token,
              token_secret: config.twitter.tokenSecret};

var lastRefresh=moment();
function getFriends(username, callback){
  if(getFriends.count > 1) {
    console.log("Rate limit exceeded!");
  }
  else {
    console.log("# Requests in Rate Window: " + getFriends.count);
    var url  = 'https://api.twitter.com/1.1/friends/ids.json?cursor=-1&screen_name='+username+'&count=5000';
    request.get({url: url, oauth: oauth, json: true}, function(error, res, body){
      callback(body);
    });
    getFriends.lastCalled = moment();
    getFriends.count += 1;
  }
  
}
getFriends.lastCalled = '';
getFriends.count = 0;

function update() {
	if(moment()-lastRefresh > 5000) {
		lastRefresh = moment();
    getFriends.lastCalled = moment();
    getFriends.count = 0;
	}
	setTimeout(update, 1000);
	console.log(lastRefresh);
}


update();
module.exports.getFriends = getFriends;

//899 seconds
