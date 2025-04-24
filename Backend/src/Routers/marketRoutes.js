const express = require('express');
const getMarkets = require('../controllers/marketController');
const router = express.Router();


router.get('/', getMarkets);

module.exports = router;

