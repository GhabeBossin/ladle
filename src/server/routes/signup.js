"use strict";
const url = require('url');
const express = require('express');
const router  = express.Router();

// module.exports = (knex) => {
  
//   // let name = req.body.name
//   router.post("/", (req, res) => {
//     knex
//     .insert({name: "bill"})
//     .to("users")
//     .then(console.log("name added"));
//     });
//   };
  
//   return router

  module.exports = (knex) => {
    // console.log("almost there+++++++++++++++++++++++++++++++++")
    router.post("/", (req, res) => {
         knex("users")
        .insert({name: "toby"})
        .then(function(body) {
          console.log("req.body",res.body);
        })
    });
    return router;
  };
  