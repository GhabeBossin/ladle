"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/spanish", cors(), (req, res) => {
    knex('es_words')
    .join('en_words', 'en_words.id', '=', 'es_words.en_words_id')
    .select('*')
    .returning('*')
    .then(result => { res.json(result) })
    .catch((error) => {
      console.log(error)
    });
  })

  return router;
}