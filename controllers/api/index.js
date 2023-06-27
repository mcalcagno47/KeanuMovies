const router = require('express').Router();
require('dotenv').config();

const movieRoutes = require('./movieRoutes');

router.use('/movie', movieRoutes);

module.exports = router;