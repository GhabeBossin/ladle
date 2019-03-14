
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('achievements').del()
    .then(function () {
      // Inserts seed entries
      return knex('achievements').insert([
        { name: 'Welcome!', description: 'Thanks for joining.', },
        { name: 'Wordy', description: 'Nice job! You learned 5 words.'},
        { name: 'Wordsworth', description: 'Fantastic, you learned 10 words!'},
        { name: 'Word Doctor', description: 'Congratulations! You learned 15 words.'},
        { name: 'Word Masterr', description: 'Best of the best! You learned 20 words.'}
      ]);
    });
};
