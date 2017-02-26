"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const userRoute  = express.Router();
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'development']
}));

module.exports = function(DataHelpers) {

  userRoute.get("/", function(req, res) {
    if (req.session.id) {
      DataHelpers.findUser({ "handle": req.session.id }, (err, user) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.cookie('user', {
            name: user.name,
            avatars: {
              small: user.avatars.small,
              regular: user.avatars.regular,
              large: user.avatars.large
            },
            handle: user.handle
          });
          res.json(user);
        }
      });
    }
  });

  return userRoute;

}
