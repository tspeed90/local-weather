const express = require('express');
const router = express.Router();

const search = require('./search');
const weather = require('./weather');

router.get('/', search.get);
router.get('/weather', weather.get);

module.exports = router;
