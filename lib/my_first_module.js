var ratelimit = require('../index')

function testGetFriends() {
	ratelimit.getFriends("panacheswag", function(body){
		console.log(body);
	});
	console.log("Last Called: "+ratelimit.getFriends.lastCalled);
	console.log("Call Count: "+ratelimit.getFriends.count);
}

function anotherNameForThis() {
	ratelimit.getFriends("panacheswag", function(body){
		console.log(body);
	});
	console.log("Last Called: "+ratelimit.getFriends.lastCalled);
	console.log("Call Count: "+ratelimit.getFriends.count);
}

testGetFriends();
setTimeout(function(){
	anotherNameForThis();
	testGetFriends();
	}, 5000);
// testGetFriends();
anotherNameForThis();
testGetFriends();
