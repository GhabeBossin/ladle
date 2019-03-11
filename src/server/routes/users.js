"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", cors(), (req, res) => {
    knex.select("*")
    .from('users')
    .leftJoin('user_achievements', 'users.id', 'user_id')
    .leftJoin('achievements', 'user_achievements.achievements_id', 'achievements.id')
    .where({ 'username': req.query.username })
    .then(result => res.json(result))
    .catch((error) => {
      console.log("this error is from routes/users", error)
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