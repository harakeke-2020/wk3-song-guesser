const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
  res.render('partials/home')
})

router.get('/result', (req, res) => {
  res.render('partials/result')
})

module.exports = router
