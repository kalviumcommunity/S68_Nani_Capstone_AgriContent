const express = require('express');
const getMarkets = require('../controllers/marketController');
const createMarket = require('../controllers/marketController');
const router = express.Router();


router.get('/', getMarkets);

router.post('/', createMarket);

module.exports = router;



