const express = require('express');
const carRouter = require('./carsRouter');

const server = express();


server.use(express.json());
server.use('/api/cars' , carRouter);


server.get('/' , (req,res) =>{
    res.status(200).send('<h1>WELCOME TO DILLON CLASSIC CARS<h1>');
})

module.exports = server;