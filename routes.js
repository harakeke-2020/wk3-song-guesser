const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
  res.render('partials/song')
})

router.get('/songs', (req, res) => {
  res.render('song')
})

module.exports = router
