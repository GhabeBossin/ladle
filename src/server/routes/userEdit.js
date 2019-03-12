"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // updates word in db for WordEdit component in AdminWords
  router.put("/update", cors(), (req, res) => {
    console.log(req.body.id, "request body")
    const data = req.body
    console.log("data", data)
    knex('users')
      .where({ 'id': data.id })
      .update({
        'username': data.username,
        'first_name': data.first_name,
        'last_name': data.last_name,
        'password': data.password
      })
      .returning("*")
      .then(result => console.log("Result", result))
      .then(res.status(200))
      .then(res.send("DB updated"))
      .catch((error) => {
        console.log('Error in wordEdit query', error)
      }
    );
  })

  return router;
}

// add options to update password if present ??