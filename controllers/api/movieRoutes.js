const router = require('express').Router();

const {Movie} = require('../../models');

router.get('/', (req, res) => {
    try {
        const getMovies = Movie.findAll({
            id: req.body.id,
            name: req.body.name,
            year: req.body.year,
            description: req.body.description,
            used: req.body.used
        });
        res.status(200).json(getMovies);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const postMovie = await Movie.create({
        movie_id: req.body.movie_id,
        name: req.body.name,
        year: req.body.year,
        description: req.body.description,
        used: req.body.used
      });
      res.status(200).json(postMovie);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;