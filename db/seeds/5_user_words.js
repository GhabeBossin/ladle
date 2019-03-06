
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_words').insert([
        { en_words_id: 1, users_id: 1, is_known: false, user_difficulty: 0 },
        { en_words_id: 2, users_id: 2, is_known: false, user_difficulty: 0 },
        { en_words_id: 3, users_id: 3, is_known: false, user_difficulty: 0 },
        { en_words_id: 4, users_id: 4, is_known: false, user_difficulty: 0 },
        { en_words_id: 5, users_id: 5, is_known: false, user_difficulty: 0 },
        { en_words_id: 6, users_id: 6, is_known: false, user_difficulty: 0 },
        { en_words_id: 7, users_id: 7, is_known: false, user_difficulty: 0 },
        { en_words_id: 8, users_id: 8, is_known: false, user_difficulty: 0 }
      ]);
    });
};
