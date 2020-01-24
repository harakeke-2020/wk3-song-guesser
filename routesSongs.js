const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  // res.render('views/song')
  db.getId(Number(req.params.id))
    .then(data => {
      res.render('partials/song', data[0])
    })
})

router.post('/:id', (req, res) => {
  // const data = {
  //   title: req.body
  // }
  console.log('hello')
})

module.exports = router
