const knex = require('knex')
const config = require('./knexfile').development

const conn = knex(config)

module.exports = {
  getId
}

function getId (id, db = conn) {
  return db('songs')
    .where('id', id)
}
