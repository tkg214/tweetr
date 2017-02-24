"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");

const compass = require('compass');
const app           = express();

app.use(compass());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'development']
}));

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  const DataHelpers = require("./lib/data-helpers.js")(db)
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  const registerRoute = require("./routes/register")(DataHelpers);
  const loginRoute = require("./routes/login")(DataHelpers);
  app.use("/tweets", tweetsRoutes);
  app.use("/register", registerRoute);
  app.use("/login", loginRoute);
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
