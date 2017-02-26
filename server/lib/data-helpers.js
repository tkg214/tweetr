"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insert(newTweet, callback);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    },

    // Saves user info to 'db'
    register: function(newUser, callback) {
      db.collection("users").insert(newUser, callback);
    },

    // Gets user info
    findUser: function(handle, callback) {
      db.collection("users").findOne(handle, callback);
    },

    // Update user likes
    updateUserLikes: function(like, callback) {
      db.collection("users").insert(like, callback);
    },

    // finds specific tweet
    findTweet: function(tweet, callback) {
      db.collection("tweets").findOne(tweet, callback);
    },

    // Update tweet likes
    updateTweetLikes: function(like) {
      db.collection("users").insert(like, callback);
    }
  };
}
