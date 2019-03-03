
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('en_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('en_words').insert([
        { word: 'the', ranking: 1, diff_counter: 0, enabled: false },
        { word: 'of, from', ranking: 2, diff_counter: 0, enabled: false },
        { word: 'that, which', ranking: 3, diff_counter: 0, enabled: false },
        { word: 'and', ranking: 4, diff_counter: 0, enabled: false },
        { word: 'to, at', ranking: 5, diff_counter: 0, enabled: false },
        { word: 'in, on', ranking: 6, diff_counter: 0, enabled: false },
        { word: 'a, an', ranking: 7, diff_counter: 0, enabled: false },
        { word: 'to be', ranking: 8, diff_counter: 0, enabled: false },
        { word: 'oneself, self', ranking: 9, diff_counter: 0, enabled: false },
        { word: 'no', ranking: 10, diff_counter: 0, enabled: false },
        { word: 'to have', ranking: 11, diff_counter: 0, enabled: false },
        { word: 'by, for, through', ranking: 12, diff_counter: 0, enabled: false },
        { word: 'with', ranking: 13, diff_counter: 0, enabled: false },
        { word: 'sort, genre', ranking: 1501, diff_counter: 0, enabled: false },
        { word: 'continuous', ranking: 1502, diff_counter: 0, enabled: false },
        { word: 'to distribute, deliver', ranking: 1503, diff_counter: 0, enabled: false },
        { word: 'economy, economics, thriftiness', ranking: 1504, diff_counter: 0, enabled: false },
        { word: 'to move away, separate', ranking: 1505, diff_counter: 0, enabled: false },
        { word: 'forest', ranking: 1506, diff_counter: 0, enabled: false },
        { word: 'to demand, require', ranking: 1507, diff_counter: 0, enabled: false },
        { word: 'landscape', ranking: 1508, diff_counter: 0, enabled: false },
        { word: 'to burn', ranking: 1509, diff_counter: 0, enabled: false },
        { word: 'call, calling', ranking: 1510, diff_counter: 0, enabled: false },
        { word: 'patient', ranking: 1511, diff_counter: 0, enabled: false },
        { word: 'to tighten, make closer', ranking: 3501, diff_counter: 0, enabled: false },
        { word: 'to go beyond, cross over', ranking: 3502, diff_counter: 0, enabled: false },
        { word: 'copper', ranking: 3503, diff_counter: 0, enabled: false },
        { word: 'imaginary', ranking: 3504, diff_counter: 0, enabled: false },
        { word: 'spread out', ranking: 3505, diff_counter: 0, enabled: false },
        { word: 'alleged, presumed', ranking: 3506, diff_counter: 0, enabled: false }
      ]);
    });
};
