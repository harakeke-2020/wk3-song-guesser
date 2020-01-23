exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, title: 'my heart will go on', filepath: './1.mp3', artist: 'celine dion' },
        { id: 2, title: 'beat it', filepath: './2.mp3', artist: 'michael jackson' },
        { id: 3, title: 'crazy frog', filepath: './3.mp3', artist: 'axel f' },
        { id: 4, title: 'i want it that way', filepath: './4.mp3', artist: 'backstreet boys' },
        { id: 5, title: 'x gonna give it to ya', filepath: './5.mp3', artist: 'dmx' }
      ])
    })
}

