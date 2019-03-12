"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // updates word in db for WordEdit component in AdminWords
  router.put("/update", cors(), (req, res) => {
    console.log(req.body)
    knex
      .with('firstUpdate', knex.raw('?', [knex('users').update({ first_name: req.body.first_name}).where('id', req.body.id)]))
      .with('secondUpdate', knex.raw('?', [knex('users').update({ last_name: req.body.last_name }).where('id', req.body.id)]))
      .with('thirdUpdate', knex.raw('?', [knex('users').update({ username: req.body.username }).where('id', req.body.id)]))
      .with('fourthUpdate', knex.raw('?', [knex('users').update({ password: req.body.password }).where('id', req.body.id)]))
      .select(1)
      .returning("*")
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