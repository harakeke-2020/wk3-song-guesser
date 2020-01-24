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
        if (db.checkAnswer(input, data[0])) {
          console.log('true')
          res.redirect(`${linkNumber}/true`)
        } else {
          console.log('false')
          res.redirect(`${linkNumber}/false`)
        }
        // linkNumber++
        //res.redirect('/1/true')
        // res.redirect(`/songs/${linkNumber}`)
      } else {
        db.checkAnswer(input, data[0])
        res.redirect('/result')
      }
    })
})

router.get('/:id/true', (req, res) => {
  res.render('partials/true', { id: Number(req.params.id) + 1 })
})

router.get('/:id/false', (req, res) => {
  res.render('partials/false', { id: Number(req.params.id) })
})

module.exports = router
