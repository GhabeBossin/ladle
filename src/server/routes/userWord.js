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
        .where({ users_id: id, is_known: false})//knex.raw('is_known = 1?  AND users_id = 2?', [is_known, id]))
        .then((result) => {
          res.json(result)
        })
        .catch((error) => {
          console.log("This error is from routes/userWord:", error)
        })
    });
    return router;
  };
