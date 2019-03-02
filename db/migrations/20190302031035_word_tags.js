
exports.up = function(knex, Promise) {
  return knex.schema.createTable('word_tags', function(table) {
    table.integer('en_words_id');
    table.string('name');
    table.foreign('en_words_id').references('en_words.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('word_tags');
};
