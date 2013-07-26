var RateLimiter = require('../rate_limit.js');
var assert = require('assert');



var rateLimit = new RateLimiter(5, 2000);
var rateLimit2 = new RateLimiter(2, 10000);
var callCount = 0;
var callCount2 = 0;

var something = function(s, d){
  console.log(s);
  console.log(d)
  console.log(callCount+=1)
}

var something2 = function(s, d){
  console.log("THIS IS TWO: " + s);
  console.log(d)
  console.log(callCount2+=1)
}


rateLimit2.callWithLimit(something2,["dork", "on"])
rateLimit2.callWithLimit(something2,["dork"])
rateLimit2.callWithLimit(something2,["dork"])
rateLimit2.callWithLimit(something2,["dork"])
rateLimit2.callWithLimit(something2,["dork"])

rateLimit.callWithLimit(something,["one", "on"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])



// assert.equal(callCount, 5); //should have called five times

rateLimit.callWithLimit(something,["one", "on"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])

rateLimit2.callWithLimit(something2,["dork", "on"])
rateLimit2.callWithLimit(something2,["dork"])
rateLimit2.callWithLimit(something2,["dork"])
rateLimit2.callWithLimit(something2,["dork"])
rateLimit2.callWithLimit(something2,["dork"])

rateLimit.callWithLimit(something,["one", "on"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
rateLimit.callWithLimit(something,["one"])
// setTimeout(function(){
//   assert.equal(callCount, 22); //shoud have called 12 times
//   process.exit(0);
// },4100)
