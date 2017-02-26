"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const loginRoute  = express.Router();
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

    DataHelpers.findUser({ "handle": req.body.loghandle }, (err, user) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!(bcrypt.compareSync(req.body.logpassword, user.password))) {
        res.status(403).send('Your email and password do not match.');
      } else {
        res.status(201).send();
      }
    });

    req.session.id = req.body.loghandle;

  });

  return loginRoute;

}
