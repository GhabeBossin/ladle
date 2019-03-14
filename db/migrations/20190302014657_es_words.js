
exports.up = function(knex, Promise) {
  return knex.schema.createTable('es_words', function(table) {
    // table.increments();
    table.integer('id').notNullable().primary();
    table.string('word');
    table.integer('en_words_id');
    table.foreign('en_words_id').references('en_words.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('es_words');
};
