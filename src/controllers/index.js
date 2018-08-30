const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const search = require('./search');
const weather = require('./weather');
const error = require('./error');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', search.get);
router.get('/weather', weather.get);

router.use(error.client);
router.use(error.server);

module.exports = router;
