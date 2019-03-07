"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.put("/", (req, res) => {
    knex("en_words")
      .where("id", req.body.id)
      .increment('diff_counter', req.body.diff)
      .then(res.status(200))
      .then(res.send("DB updated"))
  })
  return router;
};