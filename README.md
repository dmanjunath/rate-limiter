rate-limiter
====================

## Description

This module helps manage your requests to the Twitter API so you don't get rate limited.  If you use
the module to make requests, it will automatically queue your requests and if you are in danger of exceeding Twitter's 
API limits, it will store them and execute them after the time window has passed.  No more worrying about rate limiting.

## Instructions

<pre>
  npm install twitter_rate_limiter
</pre>

## Setup
Create a file called config.json with your twitter credentials in the format

```javascript
{
	"twitter":{
		"consumerKey": "...",
		"consumerSecret": "...",
		"token": "...",
		"tokenSecret": "..."
	}
}	
```
You could hardcode it into the file but that wouldn't be advisable.

##Usage

In your file, import the config.json file

Import the rate_limit.js file
<pre>
  var RateLimiter = require('../rate_limit.js');
</pre>

Instantiate a new RateLimit object. 
```javascript
var getfriends = new RateLimiter(2, 5000);
```
The two arguments are the requests in the time window in the form(requests, time window). Usually the time window is 900000 ms for 15 minutes.  The request number varies by function call

Create a function for the twitter call you want to make.  This example shows the GET friends request
```javascript
var callGetFriends = function(username, callback) {
	var url  = 'https://api.twitter.com/1.1/friends/ids.json?cursor=-1&screen_name='+username+'&count=5000';
	console.log(url);
	request.get({url: url, oauth: oauth, json: true}, function(error, res, body) {
		callback(body);
	})
}
```

The function calling this would look like
```javascript
getfriends.callWithLimit(callGetFriends, ["user", function(data){
	console.log(data);
	"...insert processing here"
}]);
```


