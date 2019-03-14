
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('en_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('en_words').insert([
        { word: 'good', ranking: 1, diff_counter: 23, enabled: true },
        { word: 'nice', ranking: 2, diff_counter: -100, enabled: true },
        { word: 'friendly', ranking: 3, diff_counter: 60, enabled: true },
        { word: 'fun', ranking: 4, diff_counter: 120, enabled: true },
        { word: 'pleasant', ranking: 5, diff_counter: -56, enabled: true },
        { word: 'happy', ranking: 6, diff_counter: -9, enabled: true },
        { word: 'interesting', ranking: 7, diff_counter: 1, enabled: true },
        { word: 'smart', ranking: 8, diff_counter: 8, enabled: true },
        { word: 'boring', ranking: 9, diff_counter: 56, enabled: true },
        { word: 'unpleasant', ranking: 10, diff_counter: -52, enabled: true },
        { word: 'sad', ranking: 11, diff_counter: -45, enabled: true },
        { word: 'mean', ranking: 12, diff_counter: 60, enabled: true },
        { word: 'bad', ranking: 13, diff_counter: -60, enabled: true },
        { word: 'courageous', ranking: 1501, diff_counter: -80, enabled: true },
        { word: 'cultured', ranking: 1502, diff_counter: 25, enabled: true },
        { word: 'dignified', ranking: 1503, diff_counter: 52, enabled: true },
        { word: 'charming', ranking: 1504, diff_counter: 150, enabled: true },
        { word: 'loyal', ranking: 1505, diff_counter: 21, enabled: true },
        { word: 'gracious', ranking: 1506, diff_counter: 42, enabled: true },
        { word: 'clever', ranking: 1507, diff_counter: -45, enabled: true },
        { word: 'self-confident', ranking: 1508, diff_counter: -56, enabled: true },
        { word: 'sincere', ranking: 1509, diff_counter: -10, enabled: true },
        { word: 'tenacious', ranking: 1510, diff_counter: -21, enabled: true },
        { word: 'fickle', ranking: 1511, diff_counter: 0, enabled: true },
        { word: 'outspoken', ranking: 3501, diff_counter: 3, enabled: true },
        { word: 'talkative', ranking: 3502, diff_counter: -78, enabled: true },
        { word: 'humble', ranking: 3503, diff_counter: -25, enabled: true },
        { word: 'affectionate', ranking: 3504, diff_counter: 30, enabled: true },
        { word: 'arrogant', ranking: 3505, diff_counter: 20, enabled: true },
        { word: 'sensitive', ranking: 3506, diff_counter: 10, enabled: true }
      ]);
    });
  };
