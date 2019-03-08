"use strict";
// const url = require('url');
// const cors = require('cors');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  
  router.get("/", (req, res) => {
    knex.select('*')
    .from('achievements')
    .whereIn('id', req.query.id)
    // .returning('*')
    .then(result => { res.json(result) })
    .catch((error) => {
      console.log("This is an error from routes/getTrophy:", error)
    })
  })

  return router;
}