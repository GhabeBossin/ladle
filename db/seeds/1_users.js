exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert([
          { is_new: false, achievements: true, username: "user1", first_name: 'Timtim', last_name: 'Timmeh', password: 'password', group: 'beginner', cards_played: 67, sessions_played: 4, wrong_counter: 40, mode_setting: 'learn_easy', is_admin: true },
          { is_new: false, achievements: true, username: "user2", first_name: 'Juan', last_name: 'Pablo', password: 'password', group: 'beginner', cards_played: 67, sessions_played: 9, wrong_counter: 33, mode_setting: 'drill_easy', is_admin: false },
          { is_new: false, achievements: true, username: "user3", first_name: 'Mateo', last_name: 'Turbo', password: 'password', group: 'beginner', cards_played: 234, sessions_played: 12, wrong_counter: 68, mode_setting: 'learn_medium', is_admin: true },
          { is_new: false, achievements: true, username: "user4", last_name: 'Pooey', first_name: 'Zoe', password: 'password', group: 'intermediate', cards_played: 197, sessions_played: 30, wrong_counter: 66, mode_setting: 'learn_medium', is_admin: false },
          { is_new: false, achievements: true, username: "user5", last_name: 'Ball', first_name: 'Lucia', password: 'password', group: 'intermediate', cards_played: 200, sessions_played: 23, wrong_counter: 40, mode_setting: 'learn_hard', is_admin: false },
          { is_new: false, achievements: true, username: "user6", last_name: 'Williams', first_name: 'Abigail', password: 'password', group: 'intermediate', cards_played: 234, sessions_played: 18, wrong_counter: 63, mode_setting: 'drill_medium', is_admin: false },
          { is_new: false, achievements: true, username: "user7", last_name: 'Marks', first_name: 'Carl', password: 'password', group: 'intermediate', cards_played: 455, sessions_played: 88, wrong_counter: 33, mode_setting: 'learn_medium', is_admin: false },
          { is_new: false, achievements: true, username: "user8", last_name: 'Burns', first_name: 'Joey', password: 'password', group: 'intermediate', cards_played: 200, sessions_played: 76, wrong_counter: 9, mode_setting: 'learn_hard', is_admin: true },
          { is_new: false, achievements: true, username: "user9", last_name: 'Green', first_name: 'Anne', password: 'password', group: 'intermediate', cards_played: 20, sessions_played: 76, wrong_counter: 6, mode_setting: 'drill_hard', is_admin: true },
          { is_new: false, achievements: true, username: "user10", last_name: 'Fruut', first_name: 'Taylor', password: 'password', group: 'intermediate', cards_played: 30, sessions_played: 76, wrong_counter: 18, mode_setting: 'drill_medium', is_admin: true },
          { is_new: false, achievements: true, username: "user11", last_name: 'Little', first_name: 'Lisa', password: 'password', group: 'intermediate', cards_played: 300, sessions_played: 16, wrong_counter: 11, mode_setting: 'drill_hard', is_admin: false },
        ])
      ]);
    })
}
