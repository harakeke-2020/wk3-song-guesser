exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { title: '', filepath: './1.mp3', artist: '' },
        { title: '', filepath: './2.mp3', artist: '' },
        { title: '', filepath: './3.mp3', artist: '' },
        { title: '', filepath: './4.mp3', artist: '' },
        { title: '', filepath: './5.mp3', artist: '' },
        { title: '', filepath: './6.mp3', artist: '' },
        { title: '', filepath: './7.mp3', artist: '' },
        { title: '', filepath: './8.mp3', artist: '' },
        { title: '', filepath: './9.mp3', artist: '' },
        { title: '', filepath: './10.mp3', artist: '' }
      ])
    })
}
