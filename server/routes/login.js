"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const registerRoute  = express.Router();
const app = express();

const bcrypt = require('bcrypt');

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'development']
}));

module.exports = function(DataHelpers) {

  loginRoute.post("/", function(req, res) {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }


    req.session.user_id = //req.body.handle;
    res.redirect('/');

  });

  return loginRoute;

}
