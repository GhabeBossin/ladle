
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('password');
    table.string('email');
    table.string('group');
    table.integer('cards_played');
    table.integer('sessions_played');
    table.integer('wrong_counter');
    table.string('mode_setting');
    table.boolean('is_admin')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
