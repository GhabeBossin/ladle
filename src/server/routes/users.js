"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", cors(), (req, res) => {
    knex('users')
    .leftJoin('user_achievements', 'users.id', 'user_id')
    .leftJoin('achievements', 'user_achievements.achievements_id', 'achievements.id')
    .where({ 'username': req.query.username })
    .select(
      'users.id AS id',
      'achievements_id AS achievement_id',
      'first_name',
      'is_admin',
      'last_name',
      'name AS achievement_name',
      'username',
      'achievements.description AS achievement_description'
      )
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