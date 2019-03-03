
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('en_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('en_words').insert([
        { word: 'the', ranking: 1, diff_counter: 0, enabled: true },
        { word: 'of, from', ranking: 2, diff_counter: 0, enabled: true },
        { word: 'that, which', ranking: 3, diff_counter: 0, enabled: true },
        { word: 'and', ranking: 4, diff_counter: 0, enabled: true },
        { word: 'to, at', ranking: 5, diff_counter: 0, enabled: true },
        { word: 'in, on', ranking: 6, diff_counter: 0, enabled: true },
        { word: 'a, an', ranking: 7, diff_counter: 0, enabled: true },
        { word: 'to be', ranking: 8, diff_counter: 0, enabled: true },
        { word: 'oneself, self', ranking: 9, diff_counter: 0, enabled: true },
        { word: 'no', ranking: 10, diff_counter: 0, enabled: true },
        { word: 'to have', ranking: 11, diff_counter: 0, enabled: true },
        { word: 'by, for, through', ranking: 12, diff_counter: 0, enabled: true },
        { word: 'with', ranking: 13, diff_counter: 0, enabled: true },
        { word: 'sort, genre', ranking: 1501, diff_counter: 0, enabled: true },
        { word: 'continuous', ranking: 1502, diff_counter: 0, enabled: true },
        { word: 'to distribute, deliver', ranking: 1503, diff_counter: 0, enabled: true },
        { word: 'economy, economics, thriftiness', ranking: 1504, diff_counter: 0, enabled: true },
        { word: 'to move away, separate', ranking: 1505, diff_counter: 0, enabled: true },
        { word: 'forest', ranking: 1506, diff_counter: 0, enabled: true },
        { word: 'to demand, require', ranking: 1507, diff_counter: 0, enabled: true },
        { word: 'landscape', ranking: 1508, diff_counter: 0, enabled: true },
        { word: 'to burn', ranking: 1509, diff_counter: 0, enabled: true },
        { word: 'call, calling', ranking: 1510, diff_counter: 0, enabled: true },
        { word: 'patient', ranking: 1511, diff_counter: 0, enabled: true },
        { word: 'to tighten, make closer', ranking: 3501, diff_counter: 0, enabled: true },
        { word: 'to go beyond, cross over', ranking: 3502, diff_counter: 0, enabled: true },
        { word: 'copper', ranking: 3503, diff_counter: 0, enabled: true },
        { word: 'imaginary', ranking: 3504, diff_counter: 0, enabled: true },
        { word: 'spread out', ranking: 3505, diff_counter: 0, enabled: true },
        { word: 'alleged, presumede', ranking: 3506, diff_counter: 0, enabled: true }
      ]);
    });
};
