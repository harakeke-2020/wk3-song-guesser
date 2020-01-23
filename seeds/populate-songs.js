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
        { id: 5, title: 'x gonna give it to ya', filepath: './5.mp3', artist: 'dmx' },
        { id: 6, title: '', filepath: './6.mp3', artist: '' },
        { id: 7, title: '', filepath: './7.mp3', artist: '' },
        { id: 8, title: '', filepath: './8.mp3', artist: '' },
        { id: 9, title: '', filepath: './9.mp3', artist: '' },
        { id: 10, title: '', filepath: './10.mp3', artist: '' }
      ])
    })
}
