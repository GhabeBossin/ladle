
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('achievements').del()
    .then(function () {
      // Inserts seed entries
      return knex('achievements').insert([
        { name: 'WordsWorth', description: 'Fantastic Job! You learned 5 words!'},
        { name: 'Word Doctor', description: 'Congratulations! You learned 10 words!'},
        { name: 'Wordy!', description: 'Nice job! You learned your first word!'}
      ]);
    });
};
