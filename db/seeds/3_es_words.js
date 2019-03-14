
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('es_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('es_words').insert([
        { word: 'bueno/a', en_words_id: 1 },
        { word: 'simpático/a', en_words_id: 2 },
        { word: 'amistoso/a', en_words_id: 3 },
        { word: 'divertido/a', en_words_id: 4 },
        { word: 'agradable', en_words_id: 5 },
        { word: 'contendo/a', en_words_id: 6 },
        { word: 'interesante', en_words_id: 7 },
        { word: 'inteligente', en_words_id: 8 },
        { word: 'aburrido/a', en_words_id: 9 },
        { word: 'desagradable', en_words_id: 10 },
        { word: 'triste', en_words_id: 11 },
        { word: 'antipático', en_words_id: 12 },
        { word: 'malo/a', en_words_id: 13 },
        { word: 'atrevido/a', en_words_id: 14 },
        { word: 'culto/a', en_words_id: 15 },
        { word: 'digno/a', en_words_id: 16 },
        { word: 'encantador/a', en_words_id: 17 },
        { word: 'fiel', en_words_id: 18 },
        { word: 'gracioso/a', en_words_id: 19 },
        { word: 'listo/a', en_words_id: 20 },
        { word: 'seguro/a', en_words_id: 21 },
        { word: 'sincero/a', en_words_id: 22 },
        { word: 'tenaz', en_words_id: 23 },
        { word: 'caprichoso/a', en_words_id: 24 },
        { word: 'franco/a', en_words_id: 25 },
        { word: 'hablador/a', en_words_id: 26 },
        { word: 'humilde', en_words_id: 27 },
        { word: 'mimoso/a', en_words_id: 28 },
        { word: 'reservado/a', en_words_id: 29 },
        { word: 'sensible', en_words_id: 30 }
        
      ]);
    });
};
