
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('es_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('es_words').insert([
        { word: 'el, la', en_words_id: 1 },
        { word: 'de', en_words_id: 2 },
        { word: 'que', en_words_id: 3 },
        { word: 'y', en_words_id: 4 },
        { word: 'a', en_words_id: 5 },
        { word: 'en', en_words_id: 6 },
        { word: 'un', en_words_id: 7 },
        { word: 'ser', en_words_id: 8 },
        { word: 'se', en_words_id: 9 },
        { word: 'no', en_words_id: 10 },
        { word: 'haber', en_words_id: 11 },
        { word: 'por', en_words_id: 12 },
        { word: 'con', en_words_id: 13 },
        { word: 'género', en_words_id: 14 },
        { word: 'continuo', en_words_id: 15 },
        { word: 'distribuir', en_words_id: 16 },
        { word: 'economía', en_words_id: 17 },
        { word: 'apartar', en_words_id: 18 },
        { word: 'bosque', en_words_id: 19 },
        { word: 'reclamar', en_words_id: 20 },
        { word: 'paisaje', en_words_id: 21 },
        { word: 'quemar', en_words_id: 22 },
        { word: 'llamado', en_words_id: 23 },
        { word: 'paciente', en_words_id: 24 },
        { word: 'estrechar', en_words_id: 25 },
        { word: 'traspasar', en_words_id: 26 },
        { word: 'cobre', en_words_id: 27 },
        { word: 'imaginario', en_words_id: 28 },
        { word: 'disperso', en_words_id: 29 },
        { word: '[presunto', en_words_id: 30 }
      ]);
    });
};
