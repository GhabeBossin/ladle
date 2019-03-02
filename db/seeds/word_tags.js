
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('word_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('word_tags').insert([
        { en_words_id: 1, name: 'pron' },
        { en_words_id: 2, name: 'prep' },
        { en_words_id: 3, name: 'conj' },
        { en_words_id: 4, name: 'conj' },
        { en_words_id: 5, name: 'prep' },
        { en_words_id: 6, name: 'prep' },
        { en_words_id: 7, name: 'art' },
        { en_words_id: 8, name: 'nm' },
        { en_words_id: 9, name: 'pron' },
        { en_words_id: 10, name: 'adv' },
        { en_words_id: 11, name: 'v' },
        { en_words_id: 12, name: 'prep' },
        { en_words_id: 13, name: 'prep' },
        { en_words_id: 14, name: 'nm' },
        { en_words_id: 15, name: 'adj' },
        { en_words_id: 16, name: 'v' },
        { en_words_id: 17, name: 'nf' },
        { en_words_id: 18, name: 'v' },
        { en_words_id: 19, name: 'nm' },
        { en_words_id: 20, name: 'v' },
        { en_words_id: 21, name: 'nm' },
        { en_words_id: 22, name: 'v' },
        { en_words_id: 23, name: 'nm' },
        { en_words_id: 24, name: 'nc' },
        { en_words_id: 25, name: 'v' },
        { en_words_id: 26, name: 'v' },
        { en_words_id: 27, name: 'nm' },
        { en_words_id: 28, name: 'adj' },
        { en_words_id: 29, name: 'adj' },
        { en_words_id: 30, name: 'adj' }
      ]);
    });
};
