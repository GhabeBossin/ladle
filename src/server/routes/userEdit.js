"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // updates word in db for WordEdit component in AdminWords
  router.put("/update", cors(), (req, res) => {
    const data = req.body
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

  router.delete("/delete", cors(), (req, res) => {
    knex
      .with('firstDelete', knex.raw('?', [knex('user_achievements').del("*").where('user_id', req.body.id)]))
      .with('secondDelete', knex.raw('?', [knex('user_words').delete('*').where('users_id', req.body.id)]))
      .with('thirdDelete', knex.raw('?', [knex('users').delete("*").where('id', req.body.id)]))
      .select(1)
      .returning("*")
      .then(res.status(200))
      .then(res.send("user deleted"))
      .catch((error) => {
      console.log("Error in userEdit route /delete", error)
    })
  })
  return router;
}
