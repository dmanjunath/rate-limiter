twitter-rate-limiter
====================

Twitter API for node.js with rate limiter

## Instructions

<pre>
  npm install twitter-rate-limiter
</pre>

## Super simple to use
1.  Create a file called config.json with your twitter credentials in the format

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

2.  Navigate to the lib/ directory
3.  Run the sample 'node my_first_module.js'.  This is a sample scenario where rate limit has been set to 2 and the time window is 5 seconds.



