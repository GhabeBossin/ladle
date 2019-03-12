
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_achievements').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_achievements').insert([
        { achievements_id: 1, user_id: 1 },
        { achievements_id: 2, user_id: 1 },
        { achievements_id: 3, user_id: 1 },
        { achievements_id: 1, user_id: 2 },
        { achievements_id: 1, user_id: 3 },
        { achievements_id: 2, user_id: 3 },
        { achievements_id: 1, user_id: 4 },
        { achievements_id: 2, user_id: 4 },
        { achievements_id: 1, user_id: 5 },
        { achievements_id: 1, user_id: 6 },
        { achievements_id: 1, user_id: 7 },
        { achievements_id: 2, user_id: 7 },
        { achievements_id: 1, user_id: 8 },
        { achievements_id: 2, user_id: 8 },
        { achievements_id: 3, user_id: 8 },
      ]);
    });
};
