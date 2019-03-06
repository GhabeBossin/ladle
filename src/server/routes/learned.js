// Change boolean value of words learned by a user
"use strict";
const express = require('express');
const router  = express.Router();

  module.exports = (knex) => {
    
    router.put("/", (req, res) => {
      console.log(req.body)
      const id = req.body.user_id;
      const word = req.body.en_word_id;
      const known = req.body.is_known;
      knex("user_words")
        .where(knex.raw(`en_words_id = ${word} AND users_id = ${id}`))
        .update({ is_known: known })
        .then(res.status(200))
        .then(res.send("you are a winner"))
    });
    return router;
  };
