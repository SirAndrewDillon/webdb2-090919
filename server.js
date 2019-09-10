/* ----------------------------- Imports Express ---------------------------- */
const express = require('express')

const helmet = require('helmet')

/* ------------------- Starts the server when we invoke it ------------------ */
const server = express()

const carsRouter = require('./api/cars-router')

/* ------------------ Needed to start the server w/Express ------------------ */
server.use(express.json())


server.use(helmet())


server.use('/api/cars', carsRouter)


/* ----------------- Creates the "home page" for the server ----------------- */
server.get('/', (req, res) => {
	res.send('<h1>Welcome to the Cars Server</h1>')
})

/* --------- Exports the server so it can be used throughout the app -------- */
module.exports = server






