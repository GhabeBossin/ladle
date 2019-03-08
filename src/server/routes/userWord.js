// Change boolean value of words learned by a user
"use strict";
const express = require('express');
const router  = express.Router();

  module.exports = (knex) => {

    router.get("/", (req, res) => {
      const id = req.query.id;
      const is_known = false;
      knex("user_words")
        .select('en_words_id')
        .where(knex.raw(`is_known = ${is_known} AND users_id = ${id}`))
        .then((result) => {
          res.json(result)
        })
        .catch((error) => {
          console.log("This error is from routes/userWord:", error)
        })
    });
    return router;
  };
