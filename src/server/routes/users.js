"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", cors(), (req, res) => {
    knex.select('*')
    .from('users')
    .where({ 'username': req.query.username })
    .returning('*')
    .then(result => { res.json(result) })
    .catch((error) => {
      console.log(error)
    });
  })

  router.get("/all", cors(), (req, res) => {
    knex.select('*')
    .from('users')
    .returning('*')
    .then(result => { res.json(result) })
    .catch((error) => {
      console.log(error)
    });
  })

  return router;
}