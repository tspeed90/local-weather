const express = require('express');
const router = express.Router();

const search = require('./search');

router.get('/', search.get);

module.exports = router;
