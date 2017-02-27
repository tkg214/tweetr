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
      DataHelpers.findTweet({ "user.handle": req.body.handle, "content.text": req.body.content }, (err, tweet) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          let tweetId = tweet._id;
          DataHelpers.findUser({ "handle": req.session.id }, (err, user) => {
            if (err) {
              res.status(500).json({ error: err.message });
            } else {
              let userId = user._id;

              // TODO: refactor code, RIGHT NOW NOT DRY AT ALL

              if (tweet.likes.length === 0) {
                DataHelpers.updateUserLike({ "_id": userId }, { $push: { "likes": tweetId } }, (err) => {
                  DataHelpers.updateTweetLike({ "_id": tweetId }, { $push: { "likes": userId } }, (err) => {
                    if (err) {
                      res.status(500).json({ error: err.message });
                    } else {
                      res.json(tweet.likes.length + 1)
                    }
                  });
                });
              } else {
                for (let id of tweet.likes) {
                  if ((JSON.stringify(id) === JSON.stringify(userId))) {
                    DataHelpers.updateUserLike({ "_id": userId }, { $pull: { "likes": tweetId } }, (err) => {
                      DataHelpers.updateTweetLike({ "_id": tweetId }, { $pull: { "likes": userId } }, (err) => {
                        if (err) {
                          res.status(500).json({ error: err.message });
                        } else {
                          res.json(tweet.likes.length - 1)
                        }
                      });
                    });
                  } else {
                    DataHelpers.updateUserLike({ "_id": userId }, { $push: { "likes": tweetId } }, (err) => {
                      DataHelpers.updateTweetLike({ "_id": tweetId }, { $push: { "likes": userId } }, (err) => {
                        if (err) {
                          res.status(500).json({ error: err.message });
                        } else {
                          res.json(tweet.likes.length + 1)
                        }
                      });
                    });
                  }
                }
              }
            }
          });
        };
      });
    };
  });

  return likesRoute;

}
