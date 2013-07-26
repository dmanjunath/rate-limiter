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

setTimeout(function(){
	testGetFriends();
	}, 2000);
setTimeout(function(){
	testGetFriends();
	}, 3000);
setTimeout(function(){
	testGetFriends();
	}, 5000);
// testGetFriends();
// anotherNameForThis();
// testGetFriends();
setTimeout(function(){
	testGetFriends();
	}, 6000);
setTimeout(function(){
	testGetFriends();
	}, 7000);
setTimeout(function(){
	testGetFriends();
	}, 8000);
setTimeout(function(){
	testGetFriends();
	}, 9000);
setTimeout(function(){
	testGetFriends();
	}, 15000);
setTimeout(function(){
	testGetFriends();
	}, 20000);
setTimeout(function(){
	testGetFriends();
	}, 25000);
setTimeout(function(){
	testGetFriends();
	}, 30000);
setTimeout(function(){
	testGetFriends();
	}, 35000);
setTimeout(function(){
	testGetFriends();
	}, 40000);
setTimeout(function(){
	testGetFriends();
	}, 45000);
setTimeout(function(){
	testGetFriends();
	}, 50000);
setTimeout(function(){
	testGetFriends();
	}, 55000);
// testGetFriends();
// anotherNameForThis();
// testGetFriends();
setTimeout(function(){
	testGetFriends();
	}, 60000);
setTimeout(function(){
	testGetFriends();
	}, 70000);
setTimeout(function(){
	testGetFriends();
	}, 80000);
setTimeout(function(){
	testGetFriends();
	}, 90000);
