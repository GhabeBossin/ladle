// Change boolean value of words learned by a user
"use strict";
const express = require('express');
const router  = express.Router();

  module.exports = (knex) => {

    router.put("/", (req, res) => {
      const id = req.body.user_id;
      const word = req.body.en_word_id;
      const known = req.body.is_known;
      const increment = req.body.increment
    //   knex("user_words")
    //     .where(knex.raw(`en_words_id = ${word} AND users_id = ${id}`))
    //     .update({ is_known: known })
    //     .then(res.status(200))
    //     .then(res.send("you are a winner"))
    // });
    // router.put("/", cors(), (req, res) => {
      knex
        .with('firstUpdate', knex.raw('?', [knex('user_words').update('is_known', known).where(knex.raw(`en_words_id = ${word} AND users_id = ${id}`))]))
        .with('secondUpdate', knex.raw('?', [knex('users').increment('cards_played', increment).where('users.id', id)]))
        .select(1)
        .returning("*")
        .select("*")
        .from('users')
        .where('id', id)
        .then(result => res.json(result))
        // .then(res.status(200))
        // .then(res.send("user updated"))
        .catch((error) => {
        console.log("Error in userEdit route /delete", error)
      })
    })
    return router;
  };

