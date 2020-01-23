const knex = require('knex')
const config = require('./knexfile').development

const conn = knex(config)

module.exports = {
  getId,
  checkAnswer
}

function getId (id, db = conn) { //find mp3 file and correct answer
  return db('songs')
    .where('id', id)
}

function checkAnswer (answer, userAnswer) { //compares db to user answer. User answer MUST be an object.
  if (userAnswer.title === answer.title && userAnswer.artist === answer.artist) { //answer is db object, userAnswer is post
    return true
  } else {
    return false
  }
}
