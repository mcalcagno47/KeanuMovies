const router = require('express').Router();

const {Movie} = require('../../models');

router.get('/', (req, res) => {
    try {
        const movies = Movie.findAll({
            id: req.body.id,
            name: req.body.name,
            year: req.body.year,
            description: req.body.description
        });
        res.status(200).json(movies);
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;