const Market = require("../Model/Market");


const getMarkets = async (req, res) => {
  try {
    const markets = await Market.find();
    res.status(200).json(markets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMarket = async (req, res) => {
    try {
        const market = new Market(req.body);
        const saved = await market.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(500).json({ message: "Error saving market data", error });
    }
};

module.exports =  getMarkets ;
module.exports = createMarket;







