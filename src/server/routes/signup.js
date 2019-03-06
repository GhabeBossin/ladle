// Insert new user into DB
"use strict";
const url = require('url');
const express = require('express');
const router  = express.Router();

  module.exports = (knex) => {

    router.post("/", (req, res) => {
      const data = req.body;
        knex("users")
        .insert(data)
        .then(res.status(200))
        .then(res.send("you are a winner"))

    });
    return router;
  };
