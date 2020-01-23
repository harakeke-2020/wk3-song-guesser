const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')
const routesSongs = require('./routesSongs')

const server = express()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', routes)
server.use('/songs/', routesSongs)

module.exports = server
