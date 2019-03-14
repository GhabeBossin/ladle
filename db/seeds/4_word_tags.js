
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('word_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('word_tags').insert([
        { en_words_id: 1, name: 'Adjective' },
        { en_words_id: 2, name: 'Adjective' },
        { en_words_id: 3, name: 'Adjective' },
        { en_words_id: 4, name: 'Adjective' },
        { en_words_id: 5, name: 'Adjective' },
        { en_words_id: 6, name: 'Adjective' },
        { en_words_id: 7, name: 'Adjective' },
        { en_words_id: 8, name: 'Adjective' },
        { en_words_id: 9, name: 'Adjective' },
        { en_words_id: 10, name: 'Adjective' },
        { en_words_id: 11, name: 'Adjective' },
        { en_words_id: 12, name: 'Adjective' },
        { en_words_id: 13, name: 'Adjective' },
        { en_words_id: 14, name: 'Adjective' },
        { en_words_id: 15, name: 'Adjective' },
        { en_words_id: 16, name: 'Adjective' },
        { en_words_id: 17, name: 'Adjective' },
        { en_words_id: 18, name: 'Adjective' },
        { en_words_id: 19, name: 'Adjective' },
        { en_words_id: 20, name: 'Adjective' },
        { en_words_id: 21, name: 'Adjective' },
        { en_words_id: 22, name: 'Adjective' },
        { en_words_id: 23, name: 'Adjective' },
        { en_words_id: 24, name: 'Adjective' },
        { en_words_id: 25, name: 'Adjective' },
        { en_words_id: 26, name: 'Adjective' },
        { en_words_id: 27, name: 'Adjective' },
        { en_words_id: 28, name: 'Adjective' },
        { en_words_id: 29, name: 'Adjective' },
        { en_words_id: 30, name: 'Adjective' }
      ]);
    });
};
