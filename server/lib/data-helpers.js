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
    findUser: function(user, callback) {
      db.collection("users").findOne(user, callback);
    }
  };
}
