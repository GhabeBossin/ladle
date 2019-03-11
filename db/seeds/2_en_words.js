
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('en_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('en_words').insert([
        { word: '1the', ranking: 1, diff_counter: 0, enabled: true },
        { word: '2of, from', ranking: 2, diff_counter: 0, enabled: true },
        { word: '3that, which', ranking: 3, diff_counter: 0, enabled: true },
        { word: '4and', ranking: 4, diff_counter: 0, enabled: true },
        { word: '5to, at', ranking: 5, diff_counter: 0, enabled: true },
        { word: '6in, on', ranking: 6, diff_counter: 0, enabled: true },
        { word: '7a, an', ranking: 7, diff_counter: 0, enabled: true },
        { word: '8to be', ranking: 8, diff_counter: 0, enabled: true },
        { word: '9oneself, self', ranking: 9, diff_counter: 0, enabled: true },
        { word: '10no', ranking: 10, diff_counter: 0, enabled: true },
        { word: '11to have', ranking: 11, diff_counter: 0, enabled: true },
        { word: '12by, for, through', ranking: 12, diff_counter: 0, enabled: true },
        { word: '13with', ranking: 13, diff_counter: 0, enabled: true },
        { word: '14sort, genre', ranking: 1501, diff_counter: 0, enabled: true },
        { word: '15continuous', ranking: 1502, diff_counter: 0, enabled: true },
        { word: '16to distribute, deliver', ranking: 1503, diff_counter: 0, enabled: true },
        { word: '17economy, economics, thriftiness', ranking: 1504, diff_counter: 0, enabled: true },
        { word: '18to move away, separate', ranking: 1505, diff_counter: 0, enabled: true },
        { word: '19forest', ranking: 1506, diff_counter: 0, enabled: true },
        { word: '20to demand, require', ranking: 1507, diff_counter: 0, enabled: true },
        { word: '21landscape', ranking: 1508, diff_counter: 0, enabled: true },
        { word: '22to burn', ranking: 1509, diff_counter: 0, enabled: true },
        { word: '23call, calling', ranking: 1510, diff_counter: 0, enabled: true },
        { word: '24patient', ranking: 1511, diff_counter: 0, enabled: true },
        { word: '25to tighten, make closer', ranking: 3501, diff_counter: 0, enabled: true },
        { word: '26to go beyond, cross over', ranking: 3502, diff_counter: 0, enabled: true },
        { word: '27copper', ranking: 3503, diff_counter: 0, enabled: true },
        { word: '28imaginary', ranking: 3504, diff_counter: 0, enabled: true },
        { word: '29spread out', ranking: 3505, diff_counter: 0, enabled: true },
        { word: '30alleged, presumede', ranking: 3506, diff_counter: 0, enabled: true }
      ]);
    });
};
