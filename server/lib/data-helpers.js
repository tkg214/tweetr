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

    // Update tweet like to user
    updateUserLike: function(id, field, callback) {
      db.collection("users").update(id, field, callback);
    },

    // finds specific tweet
    findTweet: function(query, callback) {
      db.collection("tweets").findOne(query, callback);
    },

    // Update user like to tweet
    updateTweetLike: function(id, field, callback) {
      db.collection("tweets").update(id, field, callback);
    }
  };
}
