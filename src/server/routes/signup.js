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
    .returning("*")
    .then(result => res.json(result))
    .then(res.status(200))
    .catch((error) => {
      console.log("this error is from routes/signup", error)
    });
  });

  return router;
};
