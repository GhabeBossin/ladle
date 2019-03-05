"use strict";
const url = require('url');
const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  
  router.get("/", (req, res) => {
    // console.log(req)
    // const id_num = req.params.id
    // const dataArray = [];
    // function getEnglish() {
    //   return knex("en_words")
    //          .select("*")
    //          .where({"en_words.id": id_num})
    //          .then(result => {
    //             dataArray.push(res.json(result))
    //             console.log("data+++++++++++++++++++++++++++++++++++++++++++++++++++++", dataArray)
    //           })
    // }
  console.log(req.params)  
  const queries = [
    knex("en_words").select('*').where({'en_words.id': 1}),
    knex("es_words").select('*').where({'es_words.id': 1}),
  ];

  const multiQuery = queries.join(";");
  knex.raw(multiQuery)
   .then((result) => {
     res.json(result)
   })
   .catch((error) => {
   });

  // function getSpanish(en_id) {
  //     return knex("es_words")
  //     .select("*")
  //     .where({"en_words_id": 1})
  //     .then(result => {
  //       dataArray.push(res.json(result))
  //     })
  //   }
    // .leftJoin("es_words", {'en_words_id': 'en_words.id'})
    // .then()

    // .select()
    console.log()
    // console.log(getSpanish())
  });
  return router;
};