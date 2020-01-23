exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { title: 'my heart will go on', filepath: './1.mp3', artist: 'celine dion' },
        { title: 'beat it', filepath: './2.mp3', artist: 'michael jackson' },
        { title: 'crazy frog', filepath: './3.mp3', artist: 'axel f' },
        { title: 'i want it that way', filepath: './4.mp3', artist: 'backstreet boys' },
        { title: 'x gonna give it to ya', filepath: './5.mp3', artist: 'dmx' },
        { title: '', filepath: './6.mp3', artist: '' },
        { title: '', filepath: './7.mp3', artist: '' },
        { title: '', filepath: './8.mp3', artist: '' },
        { title: '', filepath: './9.mp3', artist: '' },
        { title: '', filepath: './10.mp3', artist: '' }
      ])
    })
}
