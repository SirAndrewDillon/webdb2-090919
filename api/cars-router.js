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

router.get('/:id', async (req, res) => {
    try {
        const cars = await db.findById(req.params.id)
        cars ? res.status(200).json(cars) : res.status(404).json({ error: 'The car with the specified ID does not exist.' })
    } catch (error) {
        res.status(500).json({
            error: 'The car you were looking for could not be retrieved.'
        })
    }
})





module.exports = router;