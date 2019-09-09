const express = require('express')

const db = require('../data/db-config')

const router = express.Router();

// GET - render all posts
router.get('/', async (req, res) => {
    try {
        const cars = await db.find();
        return res.status(200).json({cars, message: 'Talk about some kick ass cars!'})
    } catch(error) {
        console.log(error);
        res.status(500).json({
            error: "These are not the cars you are looking for."
        });
    }
})


module.exports = router;