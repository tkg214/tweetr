* Create registration page and insert details (username, unique handle, image, password (use bcrypt)) into new collection in tweeter db called user
  * Use same GET route
  * accessible from the nav-bar if session_id does not exist
  * POST request to same route then inserts details to user collection (validations must be handled)
  * Must create new module like data-helpers.js
  * Must create new route like tweets.js specifically for registration
  * Redirect to '/'
  ** maybe use a modal

* Create login page that sends session/cookie (use cookieSession) (validations)
  * Must create new module like data-helpers.js
  * Must create new route like tweets.js
  * Login button only visible if session_id does not exist

* Delete session once user is logged out using same route
  * Logout button only visible if session_id exists

* Only be able to use app if session exists (user must be logged in), otherwise redirect and send error messages

* Each tweet can have multiple likes, but only one like per user (insert _id of each post to user collection)
  * Once hitting like, if ObjectId (from tweets collection) in user document in user collection, then toggle icon class
  * If ObjectId exists, then toggle class and remove _id
  * Use DOM event listener to listen for clicks on like button, toggle class, and perform ajax put request to update amount of likes on tweet document in tweets collection
  * update data value for amount of likes on footer of post

* Create user specific features based on session_id (delete tweet, update tweet, repost other user's tweets, flag tweet )

** in ajax request, how is the information organized in json to know user info??
** how should the register form be organized
