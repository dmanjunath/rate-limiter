var RateLimiter = require('../rate_limit.js');
var assert = require('assert');



var rateLimit = new RateLimiter(5, 2000);
var callCount = 0;
var something = function(s, d){
  console.log(s);
  console.log(d)
  console.log(callCount+=1)
}


rateLimit.callWithLimit(something,["dork", "on"])
rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])

assert.equal(callCount, 5); //should have called five times

rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])

rateLimit.callWithLimit(something,["dork"])
rateLimit.callWithLimit(something,["dork"])
setTimeout(function(){
  assert.equal(callCount, 12); //shoud have called 12 times

},4100)