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

  registerRoute.post("/", function(req, res) {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const newUser = {
      name: req.body.name,
      avatars: {
        small: req.body.avatar,
        regular: req.body.avatar,
        large: req.body.avatar
      },
      handle: req.body.reghandle,
      password: bcrypt.hashSync(req.body.regpassword, 10)
    }

    DataHelpers.register(newUser, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
    req.session.id = req.body.reghandle;
    res.redirect('/');

  });

  return registerRoute;

}
