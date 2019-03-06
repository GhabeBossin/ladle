"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/api/users/:name", cors(), (req, res) => {
    knex.select('*')
    .from('users')
    .where('name', req.params.name)
    .returning('*')
    .then(result => { res.json(result) })
  })

  return router;
}