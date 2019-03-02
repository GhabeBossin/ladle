
exports.up = function(knex, Promise) {
  return knex.schema.createTable('achievements', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('achievements');
};
