
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('en_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('en_words').insert([
        { word: 'Good', ranking: 1, diff_counter: 23, enabled: true },
        { word: 'Nice', ranking: 2, diff_counter: -100, enabled: true },
        { word: 'Friendly', ranking: 3, diff_counter: 60, enabled: true },
        { word: 'Fun', ranking: 4, diff_counter: 120, enabled: true },
        { word: 'Pleasant', ranking: 5, diff_counter: -56, enabled: true },
        { word: 'Happy', ranking: 6, diff_counter: -9, enabled: true },
        { word: 'Interesting', ranking: 7, diff_counter: 1, enabled: true },
        { word: 'Smart', ranking: 8, diff_counter: 8, enabled: true },
        { word: 'Boring', ranking: 9, diff_counter: 56, enabled: true },
        { word: 'Unpleasant', ranking: 10, diff_counter: -52, enabled: true },
        { word: 'Sad', ranking: 11, diff_counter: -45, enabled: true },
        { word: 'Mean', ranking: 12, diff_counter: 60, enabled: true },
        { word: 'Bad', ranking: 13, diff_counter: -60, enabled: true },
        { word: 'Courageous', ranking: 1501, diff_counter: -80, enabled: true },
        { word: 'Cultured', ranking: 1502, diff_counter: 25, enabled: true },
        { word: 'Dignified', ranking: 1503, diff_counter: 52, enabled: true },
        { word: 'Charming', ranking: 1504, diff_counter: 150, enabled: true },
        { word: 'Loyal', ranking: 1505, diff_counter: 21, enabled: true },
        { word: 'Gracious', ranking: 1506, diff_counter: 42, enabled: true },
        { word: 'Clever', ranking: 1507, diff_counter: -45, enabled: true },
        { word: 'Self-confident', ranking: 1508, diff_counter: -56, enabled: true },
        { word: 'Sincere', ranking: 1509, diff_counter: -10, enabled: true },
        { word: 'Tenacious', ranking: 1510, diff_counter: -21, enabled: true },
        { word: 'Fickle', ranking: 1511, diff_counter: 0, enabled: true },
        { word: 'Outspoken', ranking: 3501, diff_counter: 3, enabled: true },
        { word: 'Talkative', ranking: 3502, diff_counter: -78, enabled: true },
        { word: 'Humble', ranking: 3503, diff_counter: -25, enabled: true },
        { word: 'Affectionate', ranking: 3504, diff_counter: 30, enabled: true },
        { word: 'Arrogant', ranking: 3505, diff_counter: 20, enabled: true },
        { word: 'Sensitive', ranking: 3506, diff_counter: 10, enabled: true }

    ]);
    });
};
