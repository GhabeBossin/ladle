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

  router.post("/awards", (req, res) => {
    let user_id = req.body.user_id;
    let award_id = req.body.award_id
    knex('user_achievements')
    .insert({ 'user_id': user_id, 'achievements_id': award_id })
    .returning('*')
    .select('achievements_id')
    .where({ 'user_id': user_id })
    .then(result => { res.json(result) })
    .catch((error) => {
      console.log("This is an error from routes/userAchievements:", error)
    });
  })
  
    return router;
}