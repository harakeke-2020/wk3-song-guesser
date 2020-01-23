
exports.up = function(knex) {
  return knex.schema.createTable('songs', table => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.string('filepath')
  })
};

exports.down = (knex) => knex.schema.dropTable('songs')
