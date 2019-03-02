
exports.up = function(knex, Promise) {
  return knex.schema.createTable('en_words', function (table) {
    table.increments();
    table.string('word');
    table.integer('ranking');
    table.string('image');
    table.string('audio');
    table.integer('diff_counter');
    table.boolean('enabled')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
