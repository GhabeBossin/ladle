"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();
// Insert new user into DB
module.exports = (knex) => {

  router.post("/", cors(), (req, res) => {
    const data = req.body;
    knex("users")
    .insert([{first_name: data.first_name, last_name: data.last_name, username: data.username, password: data.password}])
    .then(res.status(200))
    .then(res.send("successfully signed up user"))
    .then(result => res.json(result))
    .catch((error) => {
      console.log("this error is from routes/signup", error)
    });
  });

  return router;
};
