const router = require('express').Router();
const { resourceLimits } = require('worker_threads');
const {Movie} = require('../models');

require('dotenv').config();

router.get('/', async (req, res) => {

    res.render('all');

})

module.exports = router;