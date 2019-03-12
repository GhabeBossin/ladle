"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();
// Insert new user into DB
module.exports = (knex) => {

  router.post("/", cors(), (req, res) => {
    const data = req.body;
    knex("users")
    .insert([{first_name: data.first_name, last_name: data.last_name, username: data.username, password: data.password, achievements: data.achievements, is_new: false }])
    .returning("*")
    .then(result => res.json(result))
    .then(res.status(200))
    .catch((error) => {
      console.log("this error is from routes/signup", error)
    });
  });

  router.post("/userWords", cors(), (req, res) => {
    knex('user_words')
    .insert(req.body.data)
    .then(result => res.json(result))
    .catch((error) => {
      console.log("this error is from routes/signup/userWords")
    })
  })

  router.get("/allWords", cors(), (req, res) => {
    knex('en_words')
    .select('*')
    .then(result => res.json(result))
  })

  router.put("/isNew", cors(), (req, res) => {
    const id = req.body.id
    knex("users")
    .where("id", req.body.id)
    .update({ is_new: false })
    .then(res.status(200))
  })
  
  router.post('/newAward', cors(), (req,res) => {
    console.log(req.body)
    knex('user_achievements')
    .insert([{ user_id: req.body.id, achievements_id: req.body.achievement }])
    .then(result => res.json(result))
    .then(res.status(200))
  })
  return router;
  
};
