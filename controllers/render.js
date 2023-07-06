const router = require('express').Router();
const { resourceLimits } = require('worker_threads');
const {Movie} = require('../models');

require('dotenv').config();

router.get('/', async (req, res) => {
    async (response) => {    
        const movieList = await Movie.findAll({
        where: {
            movie_id: response.data.id
        }
    })
    res.render('all', {
        movieList: response.data
    });
}});

module.exports = router;