"use strict";
const url = require('url');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    // console.log(req)

    knex
    .select("*")
    .from("en_words")
    .where({ranking: 1})
    // .leftOuterJoin("polls", "polls_id", "polls.id")
    .then((results) => {
      // console.log(results)
    res.json(results);
    });
  });
  return router;
};