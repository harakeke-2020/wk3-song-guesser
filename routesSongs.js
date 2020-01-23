const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  //res.render('views/song')
  res.render('partials/song')
})

router.post('/:id', (req, res) => {
  res.render('partials/song')
})

module.exports = router
