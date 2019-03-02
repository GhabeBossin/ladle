
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_words', function (table) {
    table.increments();
    table.integer('en_words_id');
    table.integer('users_id');
    table.foreign('en_words_id').references('en_words.id');
    table.foreign('users_id').references('users.id');
    table.boolean('is_known');
    table.integer('user_difficulty');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_words');
};
