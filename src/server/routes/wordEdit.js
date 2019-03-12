"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // updates word in db for WordEdit component in AdminWords
  router.put("/update", cors(), (req, res) => {
    console.log(req.body)
    knex
      .with('firstUpdate', knex.raw('?', [knex('en_words').update({ word: req.body.en_word, enabled: req.body.enabled }).where('id', req.body.id)]))
      .with('secondUpdate', knex.raw('?', [knex('es_words').update({ word: req.body.es_word }).where('id', req.body.id)]))
      .select(1)
      .returning("*")
      .then(res.status(200))
      .then(res.send("DB updated"))
      .catch((error) => {
        console.log('Error in wordEdit query', error)
      }
    );
  })

  return router;
}
