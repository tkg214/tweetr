"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const likesRoute  = express.Router();
const app = express();

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'development']
}));

module.exports = function(DataHelpers) {

  likesRoute.put("/", function(req, res) {
    if (req.session.id) {
      DataHelpers.findTweet({ "handle": req.body.handle, "text": req.body.content }, (err, tweet) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          console.log(tweet);
        }
      });
    }
  });

  return likesRoute;

}
//
// // Gets user info
// findUser: function(handle, callback) {
//   db.collection("users").findOne(handle, callback);
// },
//
// // Update user likes
// updateUserLikes: function(like, callback) {
//   db.collection("users").insert(like, callback);
// },
//
// // finds specific tweet
// findTweet: function(tweet, callback) {
//   db.collection("tweets").findOne(tweet, callback);
// },
//
// // Update tweet likes
// updateTweetLikes: function(like) {
//   db.collection("users").insert(like, callback);
// }
