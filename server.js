const express = require('express')

const server = express()

const carsRouter = require('./api/cars-router')

server.use(express.json())

server.use('/api/cars', carsRouter)


server.get('/', (req, res) => {
	res.send('<h1>Welcome to the Cars Server</h1>')
})

module.exports = server