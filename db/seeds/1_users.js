exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert([
          { name: 'Timtim', password: 'Timmeh', group: 'beginner', cards_played: 67, sessions_played: 4, wrong_counter: 40, mode_setting: 'learn_easy', is_admin: false },
          { name: 'Juan', password: 'Arelio', group: 'beginner', cards_played: 67, sessions_played: 9, wrong_counter: 33, mode_setting: 'drill_easy', is_admin: false },
          { name: 'Mateo', password: 'Horec', group: 'beginner', cards_played: 234, sessions_played: 12, wrong_counter: 68, mode_setting: 'learn_medium', is_admin: false },
          { name: 'Zoe', password: 'Sabino', group: 'intermediate', cards_played: 197, sessions_played: 30, wrong_counter: 66, mode_setting: 'learn_medium', is_admin: false },
          { name: 'Lucia', password: 'Therska', group: 'intermediate', cards_played: 200, sessions_played: 23, wrong_counter: 40, mode_setting: 'learn_hard', is_admin: false },
          { name: 'Abigail', password: 'Beans', group: 'intermediate', cards_played: 234, sessions_played: 18, wrong_counter: 63, mode_setting: 'drill_medium', is_admin: false },
          { name: 'Carl', password: 'Bee', group: 'intermediate', cards_played: 455, sessions_played: 88, wrong_counter: 33, mode_setting: 'learn_medium', is_admin: false },
          { name: 'Jo', password: 'Burns', group: 'intermediate', cards_played: 230, sessions_played: 76, wrong_counter: 9, mode_setting: 'drill_hard', is_admin: true },
        ])
      ]);
    })
}
