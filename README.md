twitter-rate-limiter
====================

Twitter API for node.js with rate limiter

Instructions
============
1.  Create a file called config.json with your twitter credentials in the format <br>
  {<br>
    &nbsp;&nbsp;"twitter":{<br>
        &nbsp;&nbsp;&nbsp;"consumerKey": "Key",<br>
	      &nbsp;&nbsp;&nbsp;"consumerSecret": "Secret",<br>
	      &nbsp;&nbsp;&nbsp;"token": "Token",<br>
	      &nbsp;&nbsp;&nbsp;"tokenSecret": "Token Secret"<br>
	    &nbsp;&nbsp;}<br>
  }<br>
  You could hardcode it into the file but that wouldn't be advisable.

2.  Navigate to the lib/ directory
3.  Run the sample 'node my_first_module.js'.  This is a sample scenario where rate limit has been set to 2 and the time window is 5 seconds.


