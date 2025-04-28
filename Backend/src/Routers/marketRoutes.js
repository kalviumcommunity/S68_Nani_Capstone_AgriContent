const express = require('express');

const {getMarkets, createMarket, updatedMarket } = require("../controllers/marketController");
const router = express.Router();


router.get('/', getMarkets);

router.post('/', createMarket);

router.put("/:id", updatedMarket);

module.exports = router;






