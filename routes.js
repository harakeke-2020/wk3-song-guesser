const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
  res.render('partials/home')
})

router.get('/songs', (req, res) => {
  res.render('song')
})

module.exports = router
