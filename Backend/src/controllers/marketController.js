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

const updatedMarket = async (req, res) => {
    try {
        const marketId = req.params.id;
        const updatedMarket = await Market.findByIdAndUpdate(marketId, req.body, {
            new: true,
        });
        if (!updatedMarket) {
            return res.status(404).json({ message: "Market not found" });
        }
        res.status(200).json(updatedMarket);
    } catch (error) {
        res.status(500).json({ message: "Error updating market data", error });
    }
};



module.exports={getMarkets,updatedMarket,createMarket};




