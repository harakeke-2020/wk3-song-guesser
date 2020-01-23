const express = require('express')

const router = express.Router()

const db = require('./db')

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  //res.render('views/song')
  res.send('hello')
})

module.exports = router
