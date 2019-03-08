
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_achievements', function(table) {
  table.integer('achievements_id');
  table.integer('user_id');
  table.foreign('achievements_id').references('achievements.id');
  table.foreign('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_achievements')
};
