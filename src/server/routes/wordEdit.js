"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // updates word in db for WordEdit component in AdminWords
  router.put("/update", cors(), (req, res) => {
    knex('en_words')
      .leftJoin('es_words', 'en_words.id', '=', 'es_words.en_words_id')
      .join('word_tags', 'en_words.id', 'word_tags.en_words_id')
      .select('*', 'en_words.word AS en_word', 'es_words.word AS es_word')
      .where({ 'en_word': req.query.en_word })
      .returning("*")
      .as("en_words.word")
      // .then(result => { res.json(result) })
      .then(res.status(200))
      .then(res.send("DB updated"))
      .catch((error) => {
        console.log('Error in wordEdit query', error)
      }
    );
  })

  return router;
}
