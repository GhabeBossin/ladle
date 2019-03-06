"use strict";
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
  const queries = [
    knex("en_words").select('*').where({ 'en_words.id': req.query.id }),
    knex("es_words").select('*').where({ 'es_words.id': req.query.id }),
    
  ];

  const multiQuery = queries.join(";");
  knex.raw(multiQuery)
  .then((result) => {
    res.json(result)
  })
  .catch((error) => {
    console.log(error)
  });
  });

  return router;
};