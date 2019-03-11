"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // updates word in db from AdminWordEdit
  router.post("/edit", cors(), (req, res) => {
    knex('en_words')
      .leftJoin('es_words', 'en_words.id', '=', 'es_words.en_words_id')
      .join('word_tags', 'en_words.id', 'word_tags.en_words_id')
      .select('*', 'en_words.word AS en_word', 'es_words.word AS es_word')
      .where(word)
      .returning("*")
      .as("en_words.word")
      .then(result => { res.json(result) })
      .catch((error) => {
        console.log(error)
      }
    );
  })

  return router;
}