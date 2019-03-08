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
    // .returning(
      // knex.raw('ARRAY_AGG(achievements.id) as achievements'),
      // 'users.first_name',
      // 'users.last_name',
      // 'users.username',
      // 'users.email',
      // 'users.group',
      // 'users.cards_played',
      // 'users.sessions_played',
      // 'users.wrong_counter',
      // 'user.mode_setting',
      // 'users.is_admin'
    // )
    .then(result => res.json(result))
    .catch((error) => {
      console.log("this error is from routes/login", error)
    });
  })

  return router;
}