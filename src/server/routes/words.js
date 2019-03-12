"use strict";
const url = require('url');
const cors = require('cors');
const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // populates AdminWords table
  router.get("/all", cors(), (req, res) => {
    knex('en_words')
      .leftJoin('es_words', 'en_words.id', '=', 'es_words.en_words_id')
      .join('word_tags', 'en_words.id', 'word_tags.en_words_id')
      .select('*', 'en_words.word AS en_word', 'es_words.word AS es_word')
      .returning("*")
      .as("en_words.word")
      .then(result => { res.json(result) })
      .catch((error) => {
        console.log('Error in routes/words/all: ',error)
      });
  })

  router.get("/search", cors(), (req, res) => {
    knex('en_words')
      .leftJoin('es_words', 'en_words.id', 'es_words.en_words_id')
      .select('*')
      .where({ 'en_words.word': req.query.id })
      .then(result => { res.json(result) })
      .catch((error) => {
        console.log('Error in routes/words/search: ', error)
      });
  })

  return router;
}