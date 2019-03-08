"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex.select('*')
    .from('user_achievements')
    .where({ 'user_id': req.query.id })
    .returning('*')
    .then(result => { res.json(result) })
    .catch((error) => {
      console.log("This is an error from routes/userAchievements:", error)
    });
  })

  return router;
}