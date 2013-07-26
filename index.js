var request = require('request');
var moment = require('moment');
var config = require('./config.json');
// var kue = require('kue'), 
//     jobs = kue.createQueue();

var oauth = { consumer_key: config.twitter.consumerKey,
              consumer_secret: config.twitter.consumerSecret,
              token: config.twitter.token,
              token_secret: config.twitter.tokenSecret};

var lastRefresh=moment();


//GET friends count
function getFriends(username, callback){
  getFriends.requests.push(username);
  callGetFriends(username, function(data){
    callback(data);
  });
}
getFriends.lastCalled = '';
getFriends.count = 0;
getFriends.requests = [];


function callGetFriends(username, callback){
  console.log(username);
  console.log(getFriends.requests);
  if(getFriends.count > 14) {
    console.log("Rate limit exceeded!");
    setTimeout(function(){
      callGetFriends(username, function(data){
        callback(data);
      });
    }, 900000);
  }
  else {
    console.log("# Requests in Rate Window: " + getFriends.count);
    var user = getFriends.requests.pop();
    var url  = 'https://api.twitter.com/1.1/friends/ids.json?cursor=-1&screen_name='+user+'&count=5000';
    console.log(url);
    request.get({url: url, oauth: oauth, json: true}, function(error, res, body){
      callback(body);
    });
    getFriends.lastCalled = moment();
    getFriends.count += 1;
  }
}

//GET user timeline
function getUserTimeline(username, callback){
  getUserTimeline.requests.push(username);
  callGetUserTimeline(username, function(data){
    callback(data);
  });
}
getUserTimeline.lastCalled = '';
getUserTimeline.count = 0;
getUserTimeline.requests = [];


function callGetUserTimeline(username, callback){
  console.log(username);
  console.log(getUserTimeline.requests);
  if(getUserTimeline.count > 179) {
    console.log("Rate limit exceeded!");
    setTimeout(function(){
      callGetUserTimeline(username, function(data){
        callback(data);
      });
    }, 900000);
  }
  else {
    console.log("# Requests in Rate Window: " + getUserTimeline.count);
    var user = getUserTimeline.requests.pop();
    var url  = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+user+'&count=200';
    console.log(url);
    request.get({url: url, oauth: oauth, json: true}, function(error, res, body){
      callback(body);
    });
    getUserTimeline.lastCalled = moment();
    getUserTimeline.count += 1;
  }
}

//GET user profile
function getUserProfile(username, callback){
  getUserProfile.requests.push(username);
  callGetUserProfile(username, function(data){
    callback(data);
  });
}
getUserProfile.lastCalled = '';
getUserProfile.count = 0;
getUserProfile.requests = [];


function callGetUserProfile(username, callback){
  console.log(username);
  console.log(getUserProfile.requests);
  if(getUserProfile.count > 179) {
    console.log("Rate limit exceeded!");
    setTimeout(function(){
      callGetUserProfile(username, function(data){
        callback(data);
      });
    }, 900000);
  }
  else {
    console.log("# Requests in Rate Window: " + getUserProfile.count);
    var user = getUserProfile.requests.pop();
    var url  = 'https://api.twitter.com/1.1/users/show.json?screen_name='+user;
    console.log(url);
    request.get({url: url, oauth: oauth, json: true}, function(error, res, body){
      callback(body);
    });
    getUserProfile.lastCalled = moment();
    getUserProfile.count += 1;
  }
}

function update() {
  if(moment()-lastRefresh > 900000) {
    lastRefresh = moment();
    getFriends.lastCalled = moment();
    getFriends.count = 0;
    getUserTimeline.lastRefresh = moment();
    getUserTimeline.count = 0;
    getUserProfile.lastRefresh = moment();
    getUserProfile.count = 0;
  }
  setTimeout(update, 1000);
  console.log(lastRefresh);
}


update();
module.exports.getFriends = getFriends;
module.exports.getUserTimeline = getUserTimeline;
module.exports.getUserProfile = getUserProfile;

//899 seconds
