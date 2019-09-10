const express = require('express')

const db = require('../data/db-config')

const router = express.Router();

/* -------------------------- GET - render all cars ------------------------- */
router.get('/', async (req, res) => {
    try {
        const cars = await db.find();
        return res.status(200).json({ cars, message: 'Talk about some kick ass cars!' })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "These are not the cars you are looking for."
        });
    }
}) //Tested and Working

/* -------------------------- GET render cars by id ------------------------- */
router.get('/:id', async (req, res) => {
    try {
        const cars = await db.findById(req.params.id)
        cars ? res.status(200).json(cars) : res.status(404).json({ error: 'The car with the specified ID does not exist.' })
    } catch (error) {
        res.status(500).json({
            error: 'The car you were looking for could not be retrieved.'
        })
    }
}) //Tested and Working

/* ------------------------ POST add another cool car ----------------------- */
router.post('/', async (req, res) => {
    try {
        const cars = await db.insert(req.body)
        post ? res.status(201).json(cars) : res.status(400).json({ error: 'Please fill out all required fields before posting a new automobile.' })
    } catch (error) {
        res.status(500).json({
            error: 'There was an error while saving the car to the database.'
        })
    }
}) //Needs Work
  


/* ------------------------------ Edit car data ----------------------------- */
router.put('/:id', async (req, res) => {
    try {
        const cars = await db.update(req.params.id, req.body)
        post ? res.status(200).json({cars, message: "Car Added"}) :
        res.status(404).json({message: 'The car with the specified ID does not exist.'});

    } catch (error) {
        res.status(500).json({ error: 'The car data could not be modified.'})
    }
})  // Tested and Working


/* ------------------------- Delete a car by its Id ------------------------- */
router.delete('/:id', async (req, res) => {
    try {
        const cars = await db.remove(req.params.id)

        post > 0 ? res.status(201).json(cars) : res.status(404).json({ message: 'The car with the specified ID does not exist'}) 
    } catch (error) {
        res.status(500).json({ error: 'The the car you selected could not be removed.' })
    }
}) //Tested and Working


module.exports = router;








