
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('es_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('es_words').insert([
        { word: 'Bueno/a', en_words_id: 1 },
        { word: 'Simpático/a', en_words_id: 2 },
        { word: 'Amistoso/a', en_words_id: 3 },
        { word: 'Divertido/a', en_words_id: 4 },
        { word: 'Agradable', en_words_id: 5 },
        { word: 'Contendo/a', en_words_id: 6 },
        { word: 'Interesante', en_words_id: 7 },
        { word: 'Inteligente', en_words_id: 8 },
        { word: 'Aburrido/a', en_words_id: 9 },
        { word: 'Desagradable', en_words_id: 10 },
        { word: 'Triste', en_words_id: 11 },
        { word: 'Antipático', en_words_id: 12 },
        { word: 'Malo/a', en_words_id: 13 },
        { word: 'Atrevido/a', en_words_id: 14 },
        { word: 'Culto/a', en_words_id: 15 },
        { word: 'Digno/a', en_words_id: 16 },
        { word: 'Encantador/a', en_words_id: 17 },
        { word: 'Fiel', en_words_id: 18 },
        { word: 'Gracioso/a', en_words_id: 19 },
        { word: 'Listo/a', en_words_id: 20 },
        { word: 'Seguro/a', en_words_id: 21 },
        { word: 'Sincero/a', en_words_id: 22 },
        { word: 'Tenaz', en_words_id: 23 },
        { word: 'Caprichoso/a', en_words_id: 24 },
        { word: 'Franco/a', en_words_id: 25 },
        { word: 'Hablador/a', en_words_id: 26 },
        { word: 'Humilde', en_words_id: 27 },
        { word: 'Mimoso/a', en_words_id: 28 },
        { word: 'Reservado/a', en_words_id: 29 },
        { word: 'Sensible', en_words_id: 30 }
        
      ]);
    });
};
