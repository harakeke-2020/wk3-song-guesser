const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/:id', (req, res) => {
  // res.render('views/song')
  db.getId(Number(req.params.id))
    .then(data => {
      res.render('partials/song', data[0])
    })
})

router.post('/:id', (req, res) => {
  const input = {
    artist: req.body.artist,
    title: req.body.title
  }

  db.getId(Number(req.params.id))
    .then(data => {
      let linkNumber = Number(req.params.id)
      if (linkNumber <= 4) {
        console.log('yes', linkNumber)
        db.checkAnswer(input, data[0])
        linkNumber++
        res.redirect(`/songs/${linkNumber}`)
      } else {
        db.checkAnswer(input, data[0])
        res.redirect('/result')
      }
    })
})

module.exports = router
