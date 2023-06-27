const router = require('express').Router();
require('dotenv').config();

const movieRoutes = require('./movie-routes');

router.use('/movie', movieRoutes);

module.exports = router;