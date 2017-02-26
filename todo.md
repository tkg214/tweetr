
* Each tweet can have multiple likes, but only one like per user (insert _id of each post to user collection)
  * Once hitting like, if ObjectId (from tweets collection) in user document in user collection, then toggle icon class
  * If ObjectId exists, then toggle class and remove _id
  * Use DOM event listener to listen for clicks on like button, toggle class, and perform ajax put request to update amount of likes on tweet document in tweets collection
  * update data value for amount of likes on footer of post

* Create user specific features based on session_id (delete tweet, update tweet, repost other user's tweets, flag tweet )

** in ajax request, how is the information organized in json to know user info??
** how should the register form be organized


** handle exact search... right now search is not strict enough

* Create class for like icon
* On click, send ajax request to find tweet
* Insert liked tweet in user db if it doesn't exist, otherwise delete like
* Increment like count to tweet db
* Show amount of likes in footer of tweet
